const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { db } = require("./models");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const app = express();

app.use(cookieParser());

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(bodyParser.json());

app.use(passport.initialize());

app.use("/", require("./routes"));

// db.sync().then( () => console.log("Tables created!"));
app.listen(8080, () => console.log("Listening on port 8080"));