'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user_id = await queryInterface.rawSelect('Users', {}, ['id']);
    await queryInterface.bulkInsert('Clients', [{
      name: 'Maison 1',
      user_id: user_id[0],
      created_at: Sequelize.fn('NOW'),
      updated_at: Sequelize.fn('NOW'),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
