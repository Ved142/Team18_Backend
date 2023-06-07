const route = require('express').Router()
const Staff = require("../../model/EventSchema");


// to login into admin account
route.post("/", async (req, res) => {
    const StaffDetails = {
        eventId: req.body.eventId,
        nameOfActivity: req.body.nameOfActivity,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        venue: req.body.venue,
        theme: req.body.theme,
        actualNumber: req.body.actualNumber,
        capacity: req.body.capacity,
        invitedCommunity: req.body.invitedCommunity,
        assignedStaff: req.body.assignedStaff,
    };
    // console.log(adminDetails);

    const ExistingStaff = await Staff.findOne({ eventId: StaffDetails.eventId, Flag: true});
    try {
        if (ExistingStaff) {
                ExistingStaff.Flag = false;
                await ExistingStaff.save();
                console.log("Event Deleted");
                res.send('Event Deleted');
        } else {
        // Creating a new User object
            console.log("Event Does Not Exist");
            res.send('Event Does Not Exist');
        }
    } catch (err) {
        console.log(err);
        res.status(400).send("Event was not Delete , some error occured");
    }
  });

exports = module.exports = {
    EventDelete: route
}