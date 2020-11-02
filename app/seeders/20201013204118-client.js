'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        const pass_id = await queryInterface.rawSelect('Passes', {}, ['id']);
        await queryInterface.bulkInsert('Clients', [{
            client_name: 'Client1',
            client_code: '37k8GpGhDb',
            config_path: '/app/launcherConfigs/Client1',
            pass_id: pass_id,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW'),
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Clients', null, {});
    }
};
