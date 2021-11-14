const mongoose = require("mongoose");
// Create Schema
const UsersSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    }, {
        timestamps: true,
        collection: 'users'
    }
);

module.exports = User = mongoose.model('user', UsersSchema);

