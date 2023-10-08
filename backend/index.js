// es 5 import syntax
const express = require("express");
const connectToMongodb = require("./config/db");
const cors = require("cors")
const { config } = require("dotenv");
config(); // Load environment variables from .env file
connectToMongodb()
const app = express();

// Middleware to parse JSON data from requests
app.use(express.json());
app.use(cors())
const PORT = process.env.PORT ;
// default route
app.get("/api/v1/contact", (req, res) => {
    res.send("Hello From Node js server!");
});

// available routes

app.use('/api/v1/', require('./routes/notesRoutes/notesRoute'))

// const LOCAL_IP = "10.50.75.24" // env

app.listen(PORT, () => {
    console.log(`Example app listening on the http://localhost:${PORT}`);
});
