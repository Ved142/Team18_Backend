const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const programSchema = new Schema(
  {
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    description: { type: String },
    families: [
      {
        type: Schema.Types.ObjectId,
        ref: "Family",
        default: [],
      },
    ],
    activities: [
      {
        type: Schema.Types.ObjectId,
        ref: "Activity",
        default: [],
      },
    ],
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

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
