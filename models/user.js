const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcryptjs = require('bcryptjs');
class User extends Model {}

User.init(
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [1, 255]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      }
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'
  }
);


User.associate = function (models) {
  models.User.hasMany(models.Trip, {
    through: "UserTrip"
  });
};

//ADD PORTION OF BCRYPT TO HIDE USER PASSWORDS
User.prototype.validPassword = function(password) {
  return bcryptjs.compareSync(password, this.password);
}

User.hook("beforeCreate", function(user) {
  user.password = bcryptjs.hashSync(user.password, bcryptjs.genSaltSync(10), null);
});


module.exports = { User };

// module.exports = User;

