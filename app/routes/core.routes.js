'use strict';
module.exports = (app, db) => {

    const ClientController = require('../controllers/client')(db);


    app.get('/', (req, res) => {
        res.send('API works');
    });
    app.get('/client/check', ClientController.checkName);
};
