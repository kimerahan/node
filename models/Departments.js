/* 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departments = sequelize.define('Departments', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    department_code: DataTypes.STRING
  }, {});
  Departments.associate = function(models) {
    // associations can be defined here
  };
  return Departments;
};
 */

const Sequelize = require('sequelize');
const db = require('../config/database');

const Departments = db.define('Departments', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  department_code: {
    type: Sequelize.STRING
  }
})

//module.exports = seqmodel;
module.exports = Departments;