const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'static/apk'))
  },
  filename (req, file, cb) {
    console.log('file============', file)
    cb(null, file.originalname)
  }
})
module.exports = multer({ storage }).single('file')
