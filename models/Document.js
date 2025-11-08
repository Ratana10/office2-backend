
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Document = sequelize.define('Document', {
  no: DataTypes.STRING,
  ir: DataTypes.STRING,
  outNo: DataTypes.STRING,
  submitDate: DataTypes.STRING,
  source: DataTypes.STRING,
  doc: DataTypes.STRING,
  officer: DataTypes.STRING,
  status: DataTypes.STRING,
});

module.exports = Document;