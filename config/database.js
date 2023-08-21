const mongoose = require("mongoose");

// Connection to mongodb.
mongoose.connect("mongodb+srv://soubhagyabehera525:Soubhagya123@cluster0.mqjvdnj.mongodb.net/db"); 

const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;
