const supplier = require("../models/supplier")
module.exports = (sequelize, DataTypes) => {
    const book = sequelize.define("book", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        timestamps: false, // Disable timestamps
    }
    );

    book.associate = (models) => {
        book.belongsTo(models.supplier, {
            foreignKey: {
                allowNull: false,
            },
        });
    };
    return book;
};