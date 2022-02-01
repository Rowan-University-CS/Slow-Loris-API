const express = require('express')
const router = express.Router()
require('../server/models/connectDB');
const SlowLoris = require('../server/models/SlowLoris')
const base_url = '/api'

// GET - test route
router.get(['/', `${base_url}/`], (req, res) => {
  res.send("Welcome to the Slow Loris API!")
})

/* 
Endpoints to add for API:
GET
  - all data of slow lorises
  - slow loris by ID
  - slow loris by scientific name
  - slow loris by common name
  - slow lorises by native habitat
  - slow lorises by conservation status
  - random data of a slow loris
*/

module.exports = router