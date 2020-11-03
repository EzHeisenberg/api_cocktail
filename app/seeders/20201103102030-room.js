'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const houses = await queryInterface.rawSelect('houses', {}, ['id']);
    for (let house in houses) {
      await queryInterface.bulkInsert('rooms', [{
        name: 'Salon',
        house_id: houses,
        created_at: Sequelize.fn('NOW'),
        updated_at: Sequelize.fn('NOW'),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('rooms', null, {});
  }
};
