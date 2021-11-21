// controllers/users.controller.js

// Load User Model
const User = require('../models/User');

const config = require('config')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.userRegister = async (req, res) => {
    try {
        const {username, email, password, passwordValidation} = req.body;

        if ( ! (username, email, password, passwordValidation)) {
            res.status(400).send("All input is required");
        }

        const oldUser = await User.findOne({email});

        if (oldUser) {
            res.status(409).send("User Already Exist. Please Login");
        }

        if (password != passwordValidation) {
            res.status(400).send("Password validation is not valid. Please retry.");
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: encryptedPassword,
        });

        const passPhrase = config.get('jwtPassPhrase');

        const token = jwt.sign(
            {
                user_id: user._id,
                username,
                email,
            },
            passPhrase,
            {
                expiresIn: "2h",
            }
        );

        user.token = token;

        console.log(token);

        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }

}


exports.userLogin = async (req, res) => {
    
    try {
        const {email, password} = req.body;

        if (!(email && password)) {
            res.status(400).send("All input is required.");
        }

        const user = await User.findOne({email});

        if (user && (await bcrypt.compare(password, user.password))) {
            
            const passPhrase = config.get('jwtPassPhrase');

            const token = jwt.sign(
                { user_id : user._id, email },
                passPhrase,
                {
                    expiresIn: "2h",
                }
            );

            user.token = token;

            res.status(200).send(user);
        } 
    } catch (err) {

        console.log(err);
        
    }
}