const Sequelize = require('sequelize');
const db = require('../config/database');
const Branch = require('./Branch')
const Employee = db.define('Employee', {
  fist_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  appointment_date: {
    type: Sequelize.DATE
  },
  department_id: {
    type: Sequelize.INTEGER
  },
  // branch_id: {
  //   type: Sequelize.INTEGER
  // },
  next_of_kin_contact: {
    type: Sequelize.STRING
  },
  next_of_kin_name: {
    type: Sequelize.INTEGER
  },
  mm_is_confirmed: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  job_title: {
    type: Sequelize.STRING
  },
  home_address: {
    type: Sequelize.STRING
  },
  profile_photo: {
    type: Sequelize.STRING
  },
  id_scan: {
    type: Sequelize.STRING
  },
  thumb_fp: {
    type: Sequelize.STRING
  },
  index_fp: {
    type: Sequelize.STRING
  },
  contact: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  enabled: {
    type: Sequelize.STRING
  },
  mm_number: {
    type: Sequelize.STRING
  },
  account_name: {
    type: Sequelize.STRING
  },
  compressed_image: {
    type: Sequelize.STRING
  },
  email_address: {
    type: Sequelize.STRING
  },
  is_branch_manager: {
    type: Sequelize.STRING
  },
  work_email_address: {
    type: Sequelize.STRING
  },
  deletion_reason: {
    type: Sequelize.STRING
  },
  closed_by: {
    type: Sequelize.STRING
  },
  closed_at: {
    type: Sequelize.STRING
  },
  last_date_of_work: {
    type: Sequelize.STRING
  }
  
})

//module.exports = seqmodel;
Employee.belongsTo(Branch)
module.exports = Employee;