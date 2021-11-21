const mongoose = require("mongoose");
// Create Schema
const UsersSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: false
        },
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Role'
            }
        ]
    }, {
        timestamps: true,
        collection: 'users'
    }
);

module.exports = User = mongoose.model('User', UsersSchema);