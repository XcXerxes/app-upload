const express = require('express')
const router = express.Router()

const Upload = require('../controller/upload')
const middleUpload = require('../services/upload')

router.post('/upload', middleUpload, Upload.uploadApp)

module.exports = router
