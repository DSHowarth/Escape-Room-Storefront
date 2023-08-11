const loginRoute = require("./login-render");
const signUpRoute = require("./signup-render");
const router = require("express").Router();
const homeRoutes = require("./home-render");

router.use("/login", loginRoute);
router.use("/signup", signUpRoute);
router.use("/", homeRoutes);

module.exports = router;
