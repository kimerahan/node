'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employeer = sequelize.define('Employeer', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    next_of_kin_contact: DataTypes.STRING,
    next_of_kin_name: DataTypes.STRING,
    mm_is_confirmed: DataTypes.STRING,
    gender: DataTypes.STRING,
    job_title: DataTypes.STRING,
    home_address: DataTypes.STRING,
    profile_photo: DataTypes.STRING,
    id_scan: DataTypes.STRING,
    thumb_fp: DataTypes.STRING,
    index_fp: DataTypes.STRING,
  }, {});
  Employeer.associate = function(models) {
    // associations can be defined here
    Employeer.belongsTo(models.Departments);
    Employeer.belongsTo(models.Branch);
  };
  return Employeer;
};