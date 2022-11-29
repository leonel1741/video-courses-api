const { Router } = require("express");
const {
    getUserById,
    createUser,
    updateUser
} = require("../Controllers");

const router = Router();

router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);

module.exports = router;