'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('equipment', [{
      name: 'Réfrégirateur',
      watts: 230.00,
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipment', null, {});
  }
};
