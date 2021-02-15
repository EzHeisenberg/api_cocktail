'use strict';
module.exports = (app, db) => {
    const UserController = require('../controllers/user')(db);
    const FavorisController = require('../controllers/favoris')(db);


    app.get('/', (req, res) => {
        res.send('API works');
    });

    app.post('/user/register', UserController.register)
    app.post('/user/login', UserController.login)
    app.get('/user/all', UserController.allUser)


    app.post('/favoris/add/', FavorisController.addFavoris)
    app.get('/favoris/all/', FavorisController.allFavoris)
    app.post('/favoris/delete/', FavorisController.deleteFavoris)



};
