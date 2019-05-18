
/**
 * 上传功能
 */

const db = require('../../config/db')

exports.uploadApp = async (req, res) => {
  try {
    const { version, name } = req.body
    const { size } = req.file
    if (!version || !name) {
      res.json({
        code: -200,
        data: '',
        message: 'version或者name不能为空!'
      })
    } else {
      const result = db.install_package.create({ version, name, size, platformType: 'Android', status: 1 })
      if (result) {
        res.json({
          code: 200,
          message: '上传成功',
          data: ''
        })
      }
    }
    console.log(req.file)
    // const parser = new AppInfoParser(req.file)
    // const result = await parser.parser()
    // console.log('result=============', result)
    // res.json({
    //   file: req.files
    // })
  } catch (error) {
    throw error
  }
}
