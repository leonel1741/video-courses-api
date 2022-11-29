const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Courses = require("./courses.models");

const UserCourses = db.define(
    "user_courses",
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        //     allowNull: false,
        // },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Users,
                key: "id",
            },
            field: "user_id",
        },
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Courses,
                key: "id",
            },
            field: "course_id",
        },
    },
    {
        timestamps: false,
    }
);

module.exports = UserCourses;