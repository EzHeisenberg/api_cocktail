'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Passes', [{ nbConnectionsMax: 50, created_at: Sequelize.fn('NOW'), updated_at: Sequelize.fn('NOW')},
      { nbConnectionsMax: 150, created_at: Sequelize.fn('NOW'), updated_at: Sequelize.fn('NOW')},
      { nbConnectionsMax: 300, created_at: Sequelize.fn('NOW'), updated_at: Sequelize.fn('NOW')}
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Passes', null, {});
  }
};
