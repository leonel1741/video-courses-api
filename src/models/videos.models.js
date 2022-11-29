const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Courses = require("./courses.models");

const Videos = db.define("videos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            key: "id",
            model: Courses,
        },
        field: "course_id",
    },
},{timestamps:false});

module.exports = Videos;