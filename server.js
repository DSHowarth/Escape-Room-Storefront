// imports all the necessary packages
const express = require("express");
const session = require("express-session");
const exhbs = require("express-handlebars");
const { engine } = require("express-handlebars");
const path = require("path");
const cloudinary = require("cloudinary").v2; // cloudinary cloud server

// load API keys and secret from .env
const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME;
const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY;
const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET;
// configure cloudinary SDK with API credentials
cloudinary.config({
  cloud_name: cloudinaryCloudName,
  api_key: cloudinaryApiKey,
  api_secret: cloudinaryApiSecret,
});

// connecting with router
const routes = require("./controllers/index");

// sequelize connection
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// creating a session
const sess = {
  secret: "Jerome likes dogs more than cats",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// equipping handlebar engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

// setting up express middle wares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// hand in any incoming request to the router
app.use(routes);

// syncing database with server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now app listening on http://localhost:${PORT}`);
  });
});
