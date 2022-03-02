const router = require("express").Router();
const userRoutes = require("./user-routes");

// Adds prefix of `/users` to routes created in `user-routes.js`
router.use("/users", userRoutes);

module.exports = router;
