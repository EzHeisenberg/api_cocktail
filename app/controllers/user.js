'use strict';
module.exports = (db) => {
    const User = db.User
    const crypto = require('crypto');
    const Tools = require('../utils/Tools');
    var session = require('express-session');



    return {
        register: async (req, res) => {
            try {
                const pass = req.body.password
                const hash = crypto.createHash("sha256")
                const passHash = hash.update(pass).digest("hex")

                // create a new user with the password hash from bcrypt
                let user = await User.create(
                    Object.assign(req.body, { password: passHash, id: Tools.uuid()})
                );
                // data will be an object with the user and it's authToken
                let data = await user.authorize();
                // send back the new user and auth token to the
                // client { user }
                return res.json(data);
                return res.status(200);

            } catch(err) {
                return res.status(400).send(err);
            }

        },
        login: async (req, res) => {
            const { email, password } = req.body;
            const getUser = async email => {
                return await User.findOne({
                    where: email,
                })
            }
            if (!email || !password) {
                return res.status(400).send(
                    'Email ou mot de passe vide'
                );
            }else{
                let user = await getUser({ email })
                if(!user){
                    res.status(401).send('aucun utilisateur trouver');
                }
                if (user.password === password) {


                    const getInfoUser = await User.findOne({
                        where: {id: user.id},
                        attributes: ["id", "email", "identifiant"]
                    })
                    /*
                    app.use(session(
                        {
                            secret: 'a random string',
                            saveUninitialized: false,
                            resave: false
                        }
                    ));
                    */

                    res.send(getInfoUser)
                    res.status(200)
                } else {
                    res.status(401).send('Mot de passe incorrect');
                }
            }
        },





        allUser: async (req, res) =>{
            try {
                const users = await User.findAll();
                return res.status(200).json(users);
            } catch (error) {
                return res.status(500).send(error.message);
            }
        }

    }
};
