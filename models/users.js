module.exports = function (sequelize, DataTypes) {
    const Users = sequelize.define("Users", {
      firebaseId: {
        type: DataTypes.STRING,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      name: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: "Player",
      },
    });
  
    //The through is the intermediary table (userprojects)
    Users.associate = function (models) {
      models.Users.hasMany(models.Events, {});
    
    };
    return Users;
  };
  