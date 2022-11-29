const { getUserById, createUser, updateUser } = require("./users.controllers");
const { getAllCourses, createCourse, updateCourse } = require("./courses.controllers");
const { createVideo, deleteVideo } = require("./videos.controllers");
const { createCategory, deleteCategory } = require("./categories.controllers");

module.exports = {
    getUserById,
    createUser,
    updateUser,
    getAllCourses,
    createCourse,
    updateCourse,
    createVideo,
    deleteVideo,
    createCategory,
    deleteCategory,
};