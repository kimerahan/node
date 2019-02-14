'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fist_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      appointment_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      department_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      branch_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      next_of_kin_contact: {
        type: Sequelize.STRING,
        allowNull: true
      },
      next_of_kin_name: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      mm_is_confirmed: {
        type: Sequelize.STRING,
        allowNull: true
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true
      },
      job_title: {
        type: Sequelize.STRING,
        allowNull: true
      },
      home_address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      profile_photo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      id_scan: {
        type: Sequelize.STRING,
        allowNull: true
      },
      thumb_fp: {
        type: Sequelize.STRING,
        allowNull: true
      },
      index_fp: {
        type: Sequelize.STRING,
        allowNull: true
      },
      contact: {
        type: Sequelize.STRING,
        allowNull: true
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true
      },
      enabled: {
        type: Sequelize.STRING,
        allowNull: true
      },
      mm_number: {
        type: Sequelize.STRING,
        allowNull: true
      },
      account_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      compressed_image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email_address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      is_branch_manager: {
        type: Sequelize.STRING,
        allowNull: true
      },
      work_email_address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      deletion_reason: {
        type: Sequelize.STRING,
        allowNull: true
      },
      closed_by: {
        type: Sequelize.STRING,
        allowNull: true
      },
      closed_at: {
        type: Sequelize.STRING,
        allowNull: true
      },
      last_date_of_work: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employees');
  }
};