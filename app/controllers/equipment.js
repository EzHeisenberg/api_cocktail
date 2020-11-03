'use strict';
module.exports = (db) => {
    const Equipment = db.equipment;

    return {
        getAllEquipment: async (req, res) => {
            try {
                const equipments = await Equipment.findAll();
                return res.status(200).json(equipments);
            } catch (error) {
                return res.status(500).send(error.message);
            }
        },
        getEquipmentById: async (req, res) => {
            const id = req.params.id
            try {
                const equipments = await Equipment.findByPk(id);
                if (equipments === null) {
                    return res.status(404).send("Not Found");
                }
                return res.send(equipments)

            } catch (error) {
                return res.status(500).send(error.message);
            }
        }
    }
};
