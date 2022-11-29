const Courses = require("../models/courses.models");
const UserCourses = require("../models/usercourses.models");
const Users = require("../models/users.models");
const bcrypt = require("bcrypt");

class UserServices {
    static async getById(id) {
        try {
            const result = await Users.findByPk(id, {
                attributes: ["id", "first_name", "last_name", "email"],
                include: {
                    model: UserCourses,
                    as: "user_courses",
                    attributes: ["id"],
                    include: {
                        model: Courses,
                        attributes: ["title"],
                    }
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async add(newUser) {
        try {
            const result = await Users.create(newUser);
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async toUpdate(updateData, id) {
        try {
            await Users.update(
                {
                    firstName: updateData.first_name,
                    lastName: updateData.last_name,
                    password: bcrypt.hashSync(updateData.password, 8),
                },
                {
                    where: { id },
                }
            );
            const userUpdated = await Users.findByPk(id);
            return userUpdated;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = UserServices;