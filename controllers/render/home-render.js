const router = require("express").Router();
const { User, Reservation } = require("../../model");
const withAuth = require("../../utils/auth.js");

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

// --------------------------- GET One by ID Router -------------------------------- //

router.get("/reservation/:id", async (req, res) => {
  try {
    const resData = await Reservation.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const reservation = resData.get({ plain: true });
    res.render("reservation", {
      ...reservation,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// --------------------------- Auth -------------------------------- //

router.get("/profile", withAuth, async (req, res) => {
  try {
    // find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Reservation }],
    });
    const user = userData.get({ plain: true });
    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// --------------------------- Login -------------------------------- //

router.get("/login", (req, res) => {
  // if the user is already logged in, redirect the reuest to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

module.exports = router;
