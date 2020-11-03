'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.rawSelect('Users', {}, ['id']);
    console.log(users);
    for (let user in users) {
      await queryInterface.bulkInsert('rooms', [{
        name: 'Salon',
        house_id: user,
        created_at: Sequelize.fn('NOW'),
        updated_at: Sequelize.fn('NOW'),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('rooms', null, {});
  }
};
