const Student = require("../models/Student");
const mongoose = require("mongoose");
let tableData = [];
//GET ALL WORKOUTS
const allStudentData = async (req, res) => {
  const workouts = await Student.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

//GET A SINGLE WORKOUT
const singleStudent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No--Such Workout" });
  }
  const workout = await Student.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "No Such Workout" });
  }
  res.status(200).json(workout);
};

//CREATE A NEW WORKOUT
const createStudent = async (req, res) => {
  console.log(req.body);
  const { name, gender, place, groups } = req.body;
  //add doc to db
  try {
    const workout = await Student.create({ name, gender, place, groups });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE A WORKOUT
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Student.findByIdAndDelete(id);
  if (!workout) {
    return res.status(400).json({ error: "No Such Workout" });
  }
};
//UPDATE A WORKOUT
const updateStudent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Student.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    return res.status(400).json({ error: "No Such Workout" });
  }
  res.status(200).json(workout);
};

module.exports = {
  allStudentData,
  singleStudent,
  createStudent,
  deleteStudent,
  updateStudent,
};
