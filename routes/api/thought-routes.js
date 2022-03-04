const router = require("express").Router();

const {
  getAllThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// GET all thoughts and POST new thoughts at /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// GET one thought, PUT, and DELETE at /api/thoughts/:id
router.route("/:id").get(getThought).put(updateThought).delete(deleteThought);

// POST and DELETE reactions at /api/thoughts/:thoughtId/reactions
router
  .route("/:thoughtId/reactions/")
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;
