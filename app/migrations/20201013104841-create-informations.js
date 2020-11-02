'use strict';

const Tools = require('../utils/Tools');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Informations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Tools.uuid()
      },
      client_id: {
        allowNull: false,
        type: Sequelize.UUID
      },
      download_nb: {
        type: Sequelize.BIGINT
      },
      total_connections: {
        type: Sequelize.BIGINT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Informations');
  }
};