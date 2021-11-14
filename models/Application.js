// models/Application.js

const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
}, {
  timestamps: true,
  collection: 'applications'
});

module.exports = Application = mongoose.model('application', ApplicationSchema);