'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const room = await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      house_id: {
        type: Sequelize.UUID
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
    room.associate = models => {
      room.belongsTo(models.house);
      room.hasMany(models.equipment);
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rooms');
  }
};