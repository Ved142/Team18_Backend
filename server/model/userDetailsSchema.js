const mongoose = require("mongoose");

// Schema for User's Documents
const documentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  idNo: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  dateOfIssue: {
    type: Date,
    required: true,
  },
  dateOfExpiry: {
    type: Date,
    required: true,
  },
});

// Schema for Medical History
const medicalHistorySchema = new mongoose.Schema({
  lastMedicalCheckup: {
    type: Date,
    required: true,
  },
  healthIssues: [
    {
      type: String,
    },
  ],
});

// Schema for User
const userDetailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobNo: {
    type: String,
  },
  adharCard: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  community: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  numberOfFamilyMembers: {
    type: Number,
  },
  familyMembersAges: [
    {
      type: Number,
      min: 0,
    },
  ],
  income: {
    type: String,
  },
  numberOfActivitiesAttended: {
    type: Number,
  },
  education: {
    type: String,
  },
  helpNeeded: [
    {
      type: String,
    },
  ],
  documents: [documentSchema],
  familyId: {
    type: String,
  },

  medicalHistory: [medicalHistorySchema],
  employmentStatus: {
    type: String,
    enum: ["New", "Going Through Training", "Employed", "Elevated"],
  },
  previousEmployer: {
    type: String,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

const UserDetail = mongoose.model("UserDetail", userDetailSchema);

module.exports = UserDetail;
