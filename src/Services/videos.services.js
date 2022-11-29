const Videos = require("../models/videos.models");

class VideosServices {
    static async toCreate(newVideo) {
        try {
            const result = await Videos.create(newVideo);
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async delete(id) {
        try {
            const videoToDestroy = await Videos.findByPk(id);
            await videoToDestroy.destroy();
            return "Video Deleted Successfully";
        } catch (error) {
            throw error;
        }
    }
}

module.exports = VideosServices;