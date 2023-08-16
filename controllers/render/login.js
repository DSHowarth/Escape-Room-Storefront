const router = require("express").Router();
const redirToProf = require("../../utils/redirec");
// end point with /login

// renders the login page
router.get("/", redirToProf, (req, res) => {
  res.render("login");
});

module.exports = router;
