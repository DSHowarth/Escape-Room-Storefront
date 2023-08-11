const router = require("express").Router();
const { User, Reservation } = require(".../model");
const withAuth = require(".../utils/auth.js");

// --------------------------- GET All Router -------------------------------- //

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // serialize data so the template can read it
    const users = userData.map((user) => user.get({ plain: true }));

    // pass serialized data and session flag into template
    res.render("homepage", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
