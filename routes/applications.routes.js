// routes/applications.routes.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

// Load Application Functions
const {testApplications, 
  getApplications, 
  getOneApplication,
  addApplication,
  editApplication, 
  deleteApplication
} = require('../controllers/applications.controller')

/**
 * @route GET api/applications/test
 * @description tests applications route
 * @access public
 */
router.get('/test', testApplications)

/**
 * @route GET api/applications
 * @description Get all applications
 * @access public
 */
router.get('/', auth, getApplications)

/**
 * @route GET api/applications
 * @description Get single application find
 * @access public
 */
router.get('/:id', getOneApplication);

/**
 * @route POST api/applications
 * @description Add/save Application
 * @access public
 */
router.post('/', addApplication);

// @route PUT api/applications/:id
// @description Update Application
// @access Public
router.put('/:id', editApplication);

// @route DELETE api/applications/:id
// @description Delete application by id
// @access Public
router.delete('/:id', deleteApplication);

module.exports = router;