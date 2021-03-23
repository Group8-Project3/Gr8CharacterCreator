const express = require("express");
// const session = require("express-session");
// const MongoStore = require('connect-mongo');
const mongoose = require("mongoose");
const passport = require("./passport/setup");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
<<<<<<< HEAD
app.use(
  session({
    secret: "this is secret",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongoUrl: process.env.MONGODB_URI || "mongodb://localhost:27017/Project_3" })
  })
);
=======
// app.use(
//   session({
//     secret: "this is secret",
//     resave: false,
//     saveUninitialized: true,
//     store: new MongoStore({ mongoUrl: "mongodb://localhost:27017/Project_3" })
//   })
// );
>>>>>>> 8d4fb5e1ec7996afd5f8b20b92f8cbedb99b578b
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}
// Define API routes here
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Project_3", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});