const mongoose = require('mongoose');
const express = require('express');
const logger = require('morgan');

// Establish connection with MongoDb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });

// Declare PORT
const PORT = process.env.PORT || 8000;

// Inititalize Express
const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Declaring static folders
app.use(express.static("public"));

// Require Routes
app.use(require("./routes/api.js"));
app.use(require("./routes/views.js"));

// Init PORT listener
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});