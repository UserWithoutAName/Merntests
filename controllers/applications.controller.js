// controllers/applications.controller.js

// Load Application Model
const Application = require('../models/Application')

exports.testApplications = (req, res) => res.send('Application route testing !');

exports.getApplications = (req, res) => {
    Application.find()
    .then(applications => res.json(applications))
    .catch(err => res.status(404).json(err));
}

exports.getOneApplication = (req, res) => {
    Application.findById(req.params.id)
      .then(application => res.json(application))
      .catch(err => res.status(404).json({ error: 'No Application found' }));
}

exports.addApplication = (req, res) => {
    console.log(req.body)
    Application.create(req.body)
      .then(application => res.json({ msg: 'Application added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this application' }));
}

exports.editApplication = (req, res) => {
    Application.findByIdAndUpdate(req.params.id, req.body)
      .then(application => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: err })
      );
}

exports.deleteApplication = (req, res) => {
    Application.findByIdAndRemove(req.params.id, req.body)
      .then(application => res.json({ mgs: 'Application entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a application' }));
}