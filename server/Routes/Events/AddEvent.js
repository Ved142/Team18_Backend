const route = require("express").Router();
const Event = require("../../model/EventSchema");

// to login into admin account
route.post("/", async (req, res) => {
  const EventDetails = {
    // eventId: req.body.eventId,
    nameOfActivity: req.body.nameOfActivity,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    venue: req.body.venue,
    theme: req.body.theme,
    // actualNumber: req.body.actualNumber,
    capacity: req.body.capacity,
    invitedCommunity: req.body.invitedCommunity,
    assignedStaff: req.body.assignedStaff,
  };
  // console.log(adminDetails);

  const ExistingCommunity = await Event.findOne({
    eventId: EventDetails.eventId,
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
        console.log(`Event With this ${EventDetails.eventId} Already Existes`);
        res.send(`Event With this ${EventDetails.eventId} Already Existes`);
      }
    } else {
      // Creating a new User object

      const newEventMember = new Event(EventDetails);

      // Saving the user information
      const savedEvent = await newEventMember.save();
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
