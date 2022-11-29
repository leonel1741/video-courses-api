const {
    UsersModel,
    CategoriesModel,
    CoursesModel,
    UsersCourseModel,
    VideosModel,
} = require ("./index");

const initModels = () => {

    UsersCourseModel.belongsTo(UsersModel, {as: "courses", foreignKey: "user_id"});
    UsersModel.hasMany(UsersCourseModel, {as: "user_courses", foreignKey: "user_id"});

    UsersCourseModel.belongsTo(CoursesModel, {foreignKey: "course_id"});
    CoursesModel.hasMany(UsersCourseModel, {foreignKey: "course_id"});

    CategoriesModel.belongsTo(CoursesModel, {as: "course", foreignKey: "course_id"});
    CoursesModel.hasMany(CategoriesModel, {as: "categories", foreignKey: "course_id"});

    VideosModel.belongsTo(CoursesModel, {as: "course", foreignKey: "course_id", targetKey: "id"});
    CoursesModel.hasMany(VideosModel, {as: "videos", foreignKey: "course_id"});
};

module.exports = initModels;