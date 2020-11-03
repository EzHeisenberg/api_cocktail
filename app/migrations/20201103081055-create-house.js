'use strict';

const Tools = require('../utils/Tools');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const houses = await queryInterface.createTable('houses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Tools.uuid()
      },
      name: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.UUID
      }
    });

    houses.associate = models => {
      houses.belongsTo(models.user);
    }

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('houses');
  }
};
