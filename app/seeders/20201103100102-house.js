'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user_id = await queryInterface.rawSelect('Users', {}, ['id']);
    await queryInterface.bulkInsert('houses', [{
      name: 'Maison 1',
      user_id: user_id[0],
      created_at: Sequelize.fn('NOW'),
      updated_at: Sequelize.fn('NOW'),
    }, {
      name: 'Maison 2',
      user_id: user_id[0],
      created_at: Sequelize.fn('NOW'),
      updated_at: Sequelize.fn('NOW'),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('houses', null, {});
  }
};
