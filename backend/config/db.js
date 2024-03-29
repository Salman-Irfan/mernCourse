const mongoose = require("mongoose");

const { config } = require("dotenv");
// copy the connection string from mongodb comapss

config(); // Load environment variables from .env file

const MONGODBURI =
    process.env.MONGODBURI || "mongodb://127.0.0.1:27017/aktiMernProject";

// js promises
// promise => the value, that we don't know for  now, but we will know it in future
const connectToMongodb = () => {
    mongoose
        .connect(MONGODBURI)
        // if promises fulfills
        .then(() => {
            console.log(`Connected to MongoDB at ${MONGODBURI}`);
        })
        // if denies
        .catch((error) => {
            console.error(
                `Error connecting to MongoDB at ${MONGODBURI}:`,
                error
            );
        });
};
module.exports = connectToMongodb;
