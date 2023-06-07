const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const program_schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    numberOfActivities: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
    },
    lastUpdated: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    Flag: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Program = mongoose.model("Program", program_schema);

module.exports = Program;
