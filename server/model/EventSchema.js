const { Timestamp } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activity_schema = new Schema({
    eventId: {
        type: Number,
        primaryKey: true,
        require: true,
    },
    nameOfActivity: {
        type: String,
        require: true,
    },
    startTime: {
        type: Date,
        require: true,
    },
    endTime: {
        type: Date,
        require: true,
    },
    venue: {
        type: String,
        require: true,
    },
    theme: {
        type: String,
        require: true,
    },
    actualNumber: {
        type: Number,
        require: true,
    },
    capacity: {
        type: Number,
        require: true,
    },
    invitedCommunity: {
        type: [String],
    },
    assignedStaff: {
        type: [String],
    },
    Flag: {
        type: Boolean,
        default: true,
    }
}, { timestamps: true });

const Activity = mongoose.model('Activity', activity_schema );

module.exports = Activity;

// Creation, Updating, Soft Deletion Of Event
// Assigning community to that event
// Function that assign staff to the Community Program

// Create Part -
// 	Activites -
// 	-   Name Of Activities
// 	-   Start TimeStamp
// 	-   End Time Stamp
// 	-   Venue
// 	-   Theme String
// 	-   Actual Come to the Event - After the event Updated
// 	-   Capacity for that Activity or Event
// 	-   Invited Community

// Before Event Part -
// Target Audience - ( Just an Idea, Share It to the peoples )
// Attendees Registered
// Confirmation for the event


// 	During the Event -
// Track who come to event at the event
// Register New Beneficiary ( Just Call the point 3 )

// 	Post Event -
// Participant FeedBack
// Resource Sharing After the event
// Follow Up That why Attendees has not come
// Set of Task We Have to Do -
