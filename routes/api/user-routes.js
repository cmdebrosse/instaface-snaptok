const router = require("express").Router();

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// GET all users and POST new users at /api/users
router.route("/").get(getAllUsers).post(createUser);

// GET one user, PUT, and DELETE at /api/users/:id
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

// POST and DELETE friend to user's friend list at /api/users/:id/friends/:friendId
router
  .route("/:userId/friends/:friendId")
  .post(createFriend)
  .delete(deleteFriend);

module.exports = router;
