'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('equipment', [{
      name: 'Ampoule',
      watts: 10.00,
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipment', null, {});
  }
};
