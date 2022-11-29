const { VideosServices } = require("../Services");

const createVideo = async (req, res, next) => {
    try {
        const newVideo = req.body;
        const result = await VideosServices.toCreate(newVideo);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

const deleteVideo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await VideosServices.delete(id);
        res.status(204).json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createVideo,
    deleteVideo,
}