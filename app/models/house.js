'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class house extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            house.belongsTo(models.user);
        }
    };
    house.init({
        name: DataTypes.STRING,
        user_id: DataTypes.UUID
    }, {
        sequelize,
        modelName: 'house',
    });
    return house;
};