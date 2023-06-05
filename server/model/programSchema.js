const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const program_schema = new Schema({
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
    arrayOfActivities:{
        type: [String],
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    lastUpdated: {
        type: Date,
        required: true,
    }
}, { timestamps: true });

const Program = mongoose.model('Program', program_schema);

module.exports = Program;
