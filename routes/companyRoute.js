const express = require('express')
const {postWorkout} = require('../collections/companyCreate')
const {companyDelete} = require('../collections/companyDelete')
const {getCompany, searchCompany, getOneCompany} = require('../collections/companyGet')
const { companyUpdate } = require('../collections/companyUpdate')

//Get router 
const router = express.Router()

// Get list of one item
router.get('/company/:id', getOneCompany)

// Get list of all listed companies
router.get('/:count', getCompany)

// Get list of searched items
router.get('/search/:city/:language/:hiring', searchCompany)

// Post company information
router.post('/add', postWorkout)

// Delete company information
router.delete('/:id', companyDelete)

// Update company information
router.patch('/:id', companyUpdate)

module.exports = router