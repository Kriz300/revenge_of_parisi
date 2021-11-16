require("dotenv").config();

const express = require("express");
const session = require('express-session');
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const Store = require("connect-mongo")(session);
const mongo = require("./database/connect/mongo");
const app = express();
const PORT = process.env.PORT;
const routes = require("./routes");

//mongo.init();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'pdf_hack',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    resave: false,
    saveUninitialized: false,
    store: new Store({ mongooseConnection: mongoose.connection })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes);
app.get("/", async (req,res) => {
    res.send("hola mundo")
});


app.listen(PORT, () => console.log(`Running on Port ${PORT}`));