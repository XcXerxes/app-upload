
/**
 * 上传功能
 */

exports.uploadApp = (req, res) => {
  console.log(req.files)
  res.json({
    file: req.files
  })
}
