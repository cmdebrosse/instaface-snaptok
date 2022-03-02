const router = require("express").Router();

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

// GET all users and POST at /api/users
router.route("/").get(getAllUsers).post(createUser);

// GET one user, PUT, and DELETE at /api/users/:id
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
