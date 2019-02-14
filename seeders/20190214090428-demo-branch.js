'use strict';
var datetime = new Date();
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Branches', [{
      name: 'Branch1',
      description: 'Branch description',
      places_id: 'places id',
      latlong: 'latlong id',
      createdAt: datetime,
      updatedAt: datetime
    }], {});
},

down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Branches', null, {});
}
};
