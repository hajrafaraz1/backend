require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const { getWorkouts } = require("./controllers/studentControllers");
const cors = require("cors");

//express app
const app = express();

app.use(cors());
//middleware
app.use(express.json()); // To read body from request
app.use("/", (req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/table-data", workoutRoutes);

//connect to db
mongoose.connect(process.env.MONG_UI).then(() => {});
//listen for request
app.listen(process.env.PORT, () => {
  console.log(" connected to db and listening on port ", process.env.PORT);
});
