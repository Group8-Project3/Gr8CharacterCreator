const bcrypt = require("bcryptjs");
const users = require("../models/users");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;



passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  users.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    users
      .findOne({ email: email })
      .then((user) => {
        if (!user) {
          const newUser = new users({ email, password });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then((user) => {
                  console.log("RETURNING THINGS", user);
                  return done(null, user);
                })
                .catch((err) => {
                  console.log("THERE WAS AN ERROR", err);
                  return done(null, false, { message: err });
                });
            });
          });
        } else {
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Wrong password" });
            }
          });
        }
      })
      .catch((err) => {
        return done(null, false, { message: err });
      });
  })
);

module.exports = passport;
