'use strict';

const Tools = require('../utils/Tools');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Passes', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      nbConnectionsMax: {
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
    await queryInterface.dropTable('Passes');
  }
};