'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const rooms = ['Salon', 'Cuisine', 'Salle à manger', 'Salle de bain'];
        const houses = await queryInterface.rawSelect('houses', {}, ['id']);
        await queryInterface.bulkInsert('rooms', [{
            name: rooms[Math.floor(Math.random() * Math.floor(3))],
            house_id: houses[0],
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW'),
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('rooms', null, {});
    }
};
