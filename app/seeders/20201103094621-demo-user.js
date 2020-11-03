'use strict';

const Tools = require('../Utils/Tools');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: Tools.uuid(),
      firstName: 'EZ',
      lastName: 'Heisen',
      email: 'aaaa@exemple.fr',
      password: 'puzocni<amdjajdamzldj!"uànrUN089N0',
      client_id: '9876789098768909876789098767898765',
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
