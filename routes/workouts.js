const express = require("express");
const {
  allStudentData,
  singleStudent,
  createStudent,
  deleteStudent,
  updateStudent,
} = require("../controllers/studentControllers");

// const Workout = require("../models/Student");
const router = express.Router();
//get all workouts
router.get("/", allStudentData);
// router.get('/hello', () => {});
//GET  a single workout
router.get("/:id", singleStudent);
//POST a new workout
router.post("/", createStudent);
//DELETE a workout
router.delete("/:id", deleteStudent);
//UPDATE a workout
router.patch("/:id", updateStudent);
module.exports = router;
