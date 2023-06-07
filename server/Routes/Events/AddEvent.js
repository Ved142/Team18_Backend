const route = require("express").Router();
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

  const ExistingCommunity = await Staff.findOne({
    eventId: StaffDetails.eventId,
  });
  try {
    if (ExistingCommunity) {
      if (ExistingCommunity.Flag == false) {
        ExistingCommunity.Flag = true;
        ExistingCommunity.lastUpdated = Date.now();
        await ExistingCommunity.save();
        console.log("Event Created");
        res.send("new Event Created");
      } else {
        console.log(`Event With this ${StaffDetails.eventId} Already Existes`);
        res.send(`Event With this ${StaffDetails.eventId} Already Existes`);
      }
    } else {
      // Creating a new User object

      const newStaffMember = new Staff(StaffDetails);

      // Saving the user information
      const savedStaff = await newStaffMember.save();
      console.log("Event Added");
      res.send("new Event Added");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Event was not registered , some error occured");
  }
});

exports = module.exports = {
  EventAdd: route,
};
