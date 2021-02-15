'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/indexa` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AuthToken.belongsTo(models.User);
    }
  };
  AuthToken.init({
    token: DataTypes.STRING
  }, {
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    sequelize,
    modelName: 'AuthToken',
  });

  AuthToken.generate = async function(UserId) {
    if (!UserId) {
      throw new Error('AuthToken requires a user ID')
    }

    let token = '';

    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 15; i++) {
      token += possibleCharacters.charAt(
          Math.floor(Math.random() * possibleCharacters.length)
      );
    }

    return AuthToken.create({ token, UserId })
  }
  return AuthToken;
};