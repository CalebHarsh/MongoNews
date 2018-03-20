//required packages 
const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")

//set up express app
const app = express()
const PORT = process.env.PORT || 3030;

// Static directory
app.use(express.static(path.join(__dirname + '/public')))

// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Set Handlebars as the default templating engine.
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }))
app.set("view engine", ".hbs")

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines"

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI)

//set up routes
const routes = require("./routes")
app.use(routes)


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})