const mongoose = require("mongoose");

const RolesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    }, {
        timestamps: true,
        collection: 'roles'
    }
);

module.exports = Role = mongoose.model('Role', RolesSchema);
