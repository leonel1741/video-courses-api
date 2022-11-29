const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const Users = db.define(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "first_name",
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "last_name",
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true,
            },
            allowNull: false,
        },
    },
    {
        hooks: {
            beforeCreate: (user, options) => {
                const { password } = user;
                const has = bcrypt.hashSync(password, 8);
                user.password = has;
            }
        }
    },
    {
        timestamps: false
    }
);

module.exports = Users;