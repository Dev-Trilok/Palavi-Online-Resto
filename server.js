const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const ejs = require("ejs");
const path = require("path");
const expLayout = require("express-ejs-layouts");
const mongoose = require("mongoose");
const session = require("express-session");
require("dotenv").config();
const flash = require("express-flash");
const MongoDbStore = require("connect-mongo")//(session)

//assets
app.use(express.static("public"));
app.use(expLayout);

//set template engine
app.set("views", path.join(__dirname, "/resources/views/"));

app.set("view engine", "ejs");

require("./routes/web")(app);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
 app.use((req, res, next)=>{
   res.locals.session= req.session
   next()
 })
app.use(express.json())
//database connection
mongoose.Promise = global.Promise;
// Connect MongoDB at default port 27017.

mongoose.connect(
  "mongodb://localhost:27017/Pizza4U",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);
const connection = mongoose.connection;

// const connection= mongoose.connection;
// connection.once
//session store
// new MongoDbStore(session);
let mongoStore = new MongoDbStore({
  mongooseConnection: connection,
  collection: "sessions"
});

//express session
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store:mongoStore,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, //24hrs
  })
);

app.use(flash());

