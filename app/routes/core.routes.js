'use strict';
module.exports = (app, db) => {

    const ClientController = require('../controllers/client')(db);
    const EquipmentController = require('../controllers/equipment')(db);
    const UserController = require('../controllers/user')(db);


    app.get('/', (req, res) => {
        res.send('API works');
    });

    app.get('/client/check', ClientController.checkName);


    app.get('/equipments/all', EquipmentController.getAllEquipment)
    app.get('/equipments/:id', EquipmentController.getEquipmentById)
    app.post('/equipments/create/', EquipmentController.createEquipment)
    app.post('/equipments/delete/', EquipmentController.deleteById)

    app.post('/user/register', UserController.register)
    app.post('/user/login', UserController.login)
    app.get('/user/all', UserController.allUser)


};
