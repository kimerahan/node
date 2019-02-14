/* 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define('Branch', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    places_id: DataTypes.STRING,
    latlong: DataTypes.STRING
  }, {});
  Branch.associate = function(models) {
    // associations can be defined here
  };
  return Branch;
}; */

const Sequelize = require('sequelize');
const db = require('../config/database');

const Branch = db.define('Branches', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  places_id: {
    type: Sequelize.STRING
  },
  latlong: {
    type: Sequelize.STRING
  }
})

//module.exports = seqmodel;
module.exports = Branch;