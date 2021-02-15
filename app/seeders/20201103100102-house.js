'use strict';

const Tools = require('../utils/Tools');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user_id = await queryInterface.rawSelect('Users', {}, ['id']);
    await queryInterface.bulkInsert('houses', [{
      id: Tools.uuid(),
      name: 'Maison 1',
      user_id: user_id,
      created_at: Sequelize.fn('NOW'),
      updated_at: Sequelize.fn('NOW'),
    }], {});
    await queryInterface.bulkInsert('houses', [{
      id: Tools.uuid(),
      name: 'Maison 2',
      user_id: user_id,
      created_at: Sequelize.fn('NOW'),
      updated_at: Sequelize.fn('NOW'),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('houses', null, {});
  }
};
