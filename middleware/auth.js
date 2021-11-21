const jwt = require("jsonwebtoken");
const config = require('config');

const verifyToken = (req, res, next) => {
    console.log(req.headers["x-auth-token"]);

    const token = req.body.token || req.query.token || req.headers["x-auth-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication.");
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtPassPhrase'));
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}

module.exports = verifyToken;