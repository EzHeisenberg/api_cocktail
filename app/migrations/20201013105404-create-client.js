'use strict';
const Tools = require('../utils/Tools');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Tools.uuid()
      },
      client_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      client_code: {
        type: Sequelize.STRING
      },
      config_path: {
        allowNull: true,
        type: Sequelize.TEXT('long')
      },
      pass_id: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Clients');
  }
};