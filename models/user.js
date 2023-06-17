
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            timestamps: false, // Disable timestamps
        }
    );
    return user;
}