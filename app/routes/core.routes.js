'use strict';
module.exports = (app, db) => {

    const ClientController = require('../controllers/client')(db);
    const EquipmentController = require('../controllers/equipment')(db);


    app.get('/', (req, res) => {
        res.send('API works');
    });
    app.get('/client/check', ClientController.checkName);

    app.get('/equipments/all', EquipmentController.getAllEquipment)

    app.get('/equipments/:id', EquipmentController.getEquipmentById)


};
