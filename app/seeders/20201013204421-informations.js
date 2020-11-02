'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const client_id = await queryInterface.rawSelect('Clients', {}, ['id']);

    await queryInterface.bulkInsert('Informations', [{
      client_id: client_id,
      download_nb: 0,
      total_connections: 0,
      created_at: Sequelize.fn('NOW'),
      updated_at: Sequelize.fn('NOW'),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Informations', null, {});
  }
};
