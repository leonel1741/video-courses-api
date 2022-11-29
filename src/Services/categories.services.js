const Categories = require("../models/categories.models")


class CateroriesServices {
    static async toCreate(newCategory) {
        try {
            const result = await Categories.create(newCategory);
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async delete(id) {
        try {
            const categoryToDestroy = await Categories.findByPk(id);
            await categoryToDestroy.destroy();
            return ;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = CateroriesServices;