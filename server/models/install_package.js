module.exports = (sequelize, DataType) => {
  return sequelize.define('install_package', {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataType.STRING(32),
      allowNull: false
    },
    version: {
      type: DataType.STRING(16),
      allowNull: false
    },
    platformType: {
      type: DataType.STRING(16),
      allowNull: false
    },
    size: {
      type: DataType.DOUBLE,
      allowNull: false
    },
    status: {
      type: DataType.INTEGER(2),
      allowNull: false
    },
    downloadNum: {
      type: DataType.INTEGER(16)
    }
  })
}