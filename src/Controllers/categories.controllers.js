const { CateroriesServices } = require("../Services");

const createCategory = async (req, res, next) => {
    try {
        const newCategory = req.body;
        const result = await CateroriesServices.toCreate(newCategory);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await CateroriesServices.delete(id);
        if (!result) {
            res.json("Category Deleted Successfully");
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createCategory,
    deleteCategory,
};