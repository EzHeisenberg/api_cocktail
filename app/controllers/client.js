'use strict';
module.exports = (db) => {
    const Client = db.Client;
    const Pass = db.Pass;
    const Infos = db.Informations;
    const Tools = require('../utils/Tools');
    return {
        checkName: (req, res) => {
            const client_code = req.query.client_code
            Client.findOne({
               where: {
                   client_code: client_code
               }
            }).then(async client => {
                if (client) {
                    res.send(await Tools.checkNumberConnection(client, Pass, Infos));
                } else {
                    res.send(false);
                }
            });
        },
        downloadConfig: (req, res) => {
            console.log('Config downloaded');
            const client_code = req.query.client_code;
            Client.findOne({
                where: {
                    client_code: client_code
                }
            }).then(client => {
                res.download(`./app/launcherConfigs/${client.client_name}.json`);
            });
        }
    };
};
