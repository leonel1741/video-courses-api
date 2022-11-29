const { CoursesServices } = require("../Services");

const getAllCourses = async (req, res, next) => {
    try {
        const result = await CoursesServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const createCourse = async (req, res, next) => {
    try {
        const newCourse = req.body;
        const result = await CoursesServices.toCreate(newCourse);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

const updateCourse = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const result = await CoursesServices.toUpdate(updateData, id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllCourses,
    createCourse,
    updateCourse,
};