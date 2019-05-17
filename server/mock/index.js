const db = require('../config/db')

db.install_package.drop()

db.install_package.sync().then(() => {
  db.install_package.create({
    name: '95娱乐',
    version: '1.0.0',
    platformType: 'android',
    size: 9.8,
    status: 1,
    downloadNum: 1
  })
})
