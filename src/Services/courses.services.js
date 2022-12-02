const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");

class CoursesServices {
    static async getAll() {
        try {
            const result = await Courses.findAll({
                include: [
                    {
                        model: Categories,
                        as: "categories",
                        attributes: ["name"]
                    },
                    {
                        model: Videos,
                        as: "videos",
                        attributes: ["title", "url"],
                    }
                ],
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async toCreate(newCourse) {
        try {
            const result = await Courses.create(newCourse);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async toUpdate(updateData, id) {
        console.log(updateData.description);
        try {
            await Courses.update(
                {
                    description: updateData.description,
                },
                {
                    where: { id },
                }
            );
            const courseUpdated = await Courses.findByPk(id);
            return courseUpdated;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = CoursesServices;