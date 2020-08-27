//importing the modouls

const express = require("express");
const mongoose = require("mongoose");

//setting up the express app

const app = express();

//connencting to mongo db

const url = "mongodb://localhost:27017/chat-room";

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("BOOO"))
  .catch((err) => console.log(err));
