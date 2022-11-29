const db = require("../utils/database");
const initModels = require("../models/initModels");

const Users = require("../models/users.models");
const UserCourses = require("../models/usercourses.models");
const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");

initModels();

const users = [
    {
        firstName: "Ian",
        lastName: "Rosas",
        password: "1234",
        email: "ian@gmail.com"
    },
    {
        firstName: "Alvis",
        lastName: "Echeverria",
        password: "1234",
        email: "alvis@gmail.com"
    },
    {
        firstName: "Carlos",
        lastName: "Tineo",
        password: "1234",
        email: "carlos@gmail.com"
    },
];

const courses = [
    { title: "Node Js", description: "Diseñando apis con nodejs", instructor: "Ian Rosas" },
    { title: "Cultura Financiera", description: "Como invertir de mejor forma tu dinero", instructor: "Programador X" },
    { title: "Cocina", description: "Aprendiendo a hacer salteñas", instructor: "Chef Moya" },
];

const userCourses = [
    { userId: 1, courseId: 1 },
    { userId: 2, courseId: 2 },
    { userId: 3, courseId: 3 },
    { userId: 2, courseId: 1 },
    { userId: 2, courseId: 3 },
    { userId: 2, courseId: 2 },
    { userId: 2, courseId: 3 },
    { userId: 3, courseId: 1 },
    { userId: 3, courseId: 3 },
];

const categories = [
    { name: "personal", courseId: 1 },
    { name: "escuela", courseId: 2 },
    { name: "salud", courseId: 3 },
    { name: "trabajo", courseId: 2 },
    { name: "hogar", courseId: 3 },
    { name: "deporte", courseId: 2 },
    { name: "ocio", courseId: 1 },
    { name: "financiero", courseId: 3 },
];

const videos = [
    { title: "Joins", url: "url del video", courseId: 1 },
    { title: "Salteñas", url: "url del video", courseId: 3 },
    { title: "Invertir en la Bolsa", url: "url del video", courseId: 2 },
    { title: "Invertir en la Bolsa", url: "url del video", courseId: 1 },
    { title: "Invertir en la Bolsa", url: "url del video", courseId: 2 },
];

db.sync({ force: true }).then(() => {
    console.log("Iniciando plantacion");

    users.forEach((user) => Users.create(user));

    setTimeout(() => {
        courses.forEach((course) => Courses.create(course));
    }, 100);

    setTimeout(() => {
        userCourses.forEach((userCourse) => UserCourses.create(userCourse));
    }, 200);

    setTimeout(() => {
        categories.forEach((category) => Categories.create(category));
    }, 300);

    setTimeout(() => {
        videos.forEach((video) => Videos.create(video));
    }, 400);
});

