const router = require("express").Router();
// const { User, Reservation } = require("../../model");
// const withAuth = require("../../utils/auth.js");

// --------------------------- GET All Router -------------------------------- //

router.get("/", async (req, res) => {
  try {
    // const userData = await User.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ["name"],
    //     },
    //   ],
    // });

    // // serialize data so the template can read it
    // const users = userData.map((user) => user.get({ plain: true }));

    // pass serialized data and session flag into template
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// --------------------------- GET One by ID Router -------------------------------- //

// router.get("/reservation/:id", async (req, res) => {
//   try {
//     const resData = await Reservation.findByPk(req.params.id);
//     if (!resData) {
//       res.status(404).json("No reservation found with this ID!");
//       return;
//     }
//     const reservation = resData.get({ plain: true });
//     res.render("reservation", {
//       reservation,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// --------------------------- Auth -------------------------------- //

// router.get("/profile", withAuth, async (req, res) => {
//   try {
//     // find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.userId, {
//       attributes: { exclude: ["password"] },
//       include: [{ model: Reservation }],
//     });
//     const user = userData.get({ plain: true });
//     res.render("profile", {
//       ...user,
//       loggedIn: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
