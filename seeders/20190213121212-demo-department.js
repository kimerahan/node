'use strict';
var datetime = new Date();
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Departments', [{
      name: 'Department name',
      description: 'description',
      department_code: 'department123',
      createdAt: datetime,
      updatedAt: datetime
    }], {});
},

down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Departments', null, {});
}
};
