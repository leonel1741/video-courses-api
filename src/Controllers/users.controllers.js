const Users = require("../models/users.models");
const { UserServices } = require("../Services");

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.add(newUser);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 418,
            errorContent: error,
            message: "Revisa la información que mandas",
        });
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dataUpdate = req.body;
        const result = await UserServices.toUpdate(dataUpdate, id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getUserById,
    createUser,
    updateUser,
}