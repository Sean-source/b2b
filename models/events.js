module.exports = function (sequelize, DataTypes) {
    var Events = sequelize.define("Events", {
        Title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        dateTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });


    Events.associate = function (models) {
        models.events.belongsTo(models.Users, {});

    };
    return Events;
};
