const { User } = require("../models");

const userController = {
  // Gets all users
  getAllUsers(req, res) {
    User.find()
      .select("-__v")
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },

  // Gets a single user
  getUser({ params }, res) {
    User.findOne({ _id: params.id })
      .select("-__v")
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // Creates a user
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },

  // Updates a user
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // Deletes a user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found" });
          return;
        }
        res.json({ message: "User deleted" });
      })
      .catch((err) => res.status(400).json(err));
  },

  // POST to add a new friend
  createFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { userFriends: params.friendId } },
      { new: true, runValidators: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found" });
          return;
        }
        res.json({ message: "Friend added" });
      })
      .catch((err) => res.status(400).json(err));
  },

  // DELETE to delete a friend
  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { userFriends: params.friendId } },
      { new: true, runValidators: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found" });
          return;
        }
        res.json({ message: "Friend deleted" });
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;
