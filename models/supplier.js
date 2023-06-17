const book = require("../models/book")
module.exports = (sequelize, DataTypes) => {
    const supplier = sequelize.define("supplier", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: false, // Disable timestamps
    }
    );
    supplier.associate = (models) => {
        supplier.hasMany(models.book);
    };
    return supplier;
}