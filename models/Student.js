const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    groups: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Students", studentSchema);
