module.exports = {
  database: 'distribution-app',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql',
  timezone: '+08:00',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
}