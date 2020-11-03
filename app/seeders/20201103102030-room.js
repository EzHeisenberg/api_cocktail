'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.rawSelect('rooms', {}, ['id']);
    for (let user in users) {
      await queryInterface.bulkInsert('houses', [{
        name: 'Maison 1',
        user_id: user,
        created_at: Sequelize.fn('NOW'),
        updated_at: Sequelize.fn('NOW'),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('rooms', null, {});
  }
};
