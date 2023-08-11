const router = require("express").Router();
const renderRoute = require("./render/index");
const apiRoute = require("./api/index");
const homeRoutes = require("./render/home-render");

router.use("/api", apiRoute);
router.use("/", renderRoute);
router.use("/", homeRoutes);

module.exports = router;
