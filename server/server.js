//importing the modouls

const express = require("express");
const mongoose = require("mongoose");
const chatroom = reqiure("./routes/router");

//setting up the express app

const app = express();

//connencting to mongo db

const url = "mongodb://localhost:27017/chat-room";

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//middleware

app.use(morgan("dev"));

//static-files 

if (process.env.NODE_ENV === 'production') {
    app.use express.static((__dirname + '/public/'));
}

//routs

app.use("", chatroom);
