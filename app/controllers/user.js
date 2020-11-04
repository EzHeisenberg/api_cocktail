'use strict';
module.exports = (db) => {
    const User = db.User
    const crypto = require('crypto');
    const Tools = require('../utils/Tools');


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
            const email = req.body.email
            const password = req.body.password

            // if the username / password is missing, we use status code 400
            // indicating a bad request was made and send back a message
            if (!email || !password) {
                return res.status(400).send(
                    'Request missing username or password param'
                );
            }


            const hash = crypto.createHash("sha256")
            const passHash = hash.update(password).digest("hex")

            try {
                let user = await User.authenticate(email , password)

                user = await user.authorize();

                return res.json(user);

            } catch (err) {
                return res.status(400).send('invalid username or password');
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
