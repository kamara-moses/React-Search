const express = require("express");
const mongoose = require("mongoose");

const app = express();


const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World")
})

mongoose.connect("mongodb+srv://moseskamara:<password>@main.3fdxr.mongodb.net/<dbname>?retryWrites=true&w=majority", () => {
    console.log("MongoDB Connection Established")
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
});