const route = require("express").Router();
const Event = require("../../model/EventSchema");
const User = require("../../model/userDetailsSchema")
const Program = require("../../model/programSchema");
const Staff = require("../../model/staffSchema")

// to login into admin account
route.get("/", async (req, res) => {
  // Retrieve all staff data
  try {
    const staffData = await Event.find({Flag: true}); // Retrieve all staff data
    res.json(staffData);
  } catch (error) {
    // Handle any errors that occur during the retrieval process
    res.status(500).json({ error: "Failed to retrieve Event data" });
  }
});

route.get("/unactive", async (req, res) => {
  // Retrieve all staff data
  try {
    const staffData = await Event.find({Flag: false}); // Retrieve all staff data
    res.json(staffData);
  } catch (error) {
    // Handle any errors that occur during the retrieval process
    res.status(500).json({ error: "Failed to retrieve Event data" });
  }
});

route.post("/Registration", async(req, res) => {
  const Event_detail = {
    adharCard: req.body.AdharCard_No,
    EventId: req.body.Event_id
  };
  // res.send(Event_detail)
  const User_Data = await User.findOne({
    adharCard: Event_detail.adharCard
  })
  try{
    if(User_Data) {
      const Event_Data = await Event.findOne({
        _id: Event_detail.EventId
      })
      if(Event_Data) {
        const arr = Event_Data.invitedCommunity
        const ProgramData = await Program.find({_id: { $in: arr}});
        let flag = 0;
        for (let index = 0; index < ProgramData.length; index++) {
          const element = ProgramData[index];
          if(element.name == User_Data.community) {
            flag = 1;
          }
        }
        if(flag == 1) {
           Event_Data.Register.push(Event_detail.adharCard);
          saved_data = await Event_Data.save();
          res.send("Sucess")
        }
        else {
          res.send("You Are Not from the allowed community");
        }
      }
      else {
        res.send('Error');
      }
    }
    else {
      res.send("No User Found");
    }
  }
  catch (err) {
    console.log(err);
    res.status(400).send("Event was not registered , some error occured");
  }
})

route.post("/user", async (req, res) => {
  // Retrieve all staff data
  const Event_detail = {
    EventId: req.body.Event_id
  };
  console.log(Event_detail)
  try {
    const EventData = await Event.findOne({_id: Event_detail.EventId ,Flag: true}); // Retrieve all staff data
    if(EventData) {
        console.log(EventData)
        const arr1 = EventData.Register;
        const UserData = await User.find({
          adharCard: {$in: arr1}
        })
        console.log(arr1)
        res.send(UserData);
    }
    else {
      res.send("No Event");
    }
  } catch (error) {
    // Handle any errors that occur during the retrieval process
    res.status(500).json({ error: "Failed to retrieve Event data" });
  }
});


route.post("/staff", async (req, res) => {
  // Retrieve all staff data
  const Event_detail = {
    EventId: req.body.Event_id
  };
  console.log(Event_detail)
  try {
    const EventData = await Event.findOne({_id: Event_detail.EventId ,Flag: true}); // Retrieve all staff data
    if(EventData) {
        console.log(EventData)
        const arr1 = EventData.assignedStaff;
        const StaffData = await Staff.find({
          _id: {$in: arr1}
        })
        console.log(arr1)
        res.send(StaffData);
    }
    else {
      res.send("No Event");
    }
  } catch (error) {
    // Handle any errors that occur during the retrieval process
    res.status(500).json({ error: "Failed to retrieve Event data" });
  }
});

route.post("/id", async (req, res) => {
  // Retrieve all staff data
  const Event_detail = {
    EventId: req.body.Event_id
  };
  console.log(Event_detail)
  try {
    const EventData = await Event.findOne({_id: Event_detail.EventId, Flag: true}); // Retrieve all staff data
    if(EventData) {
      res.send(EventData);
    }
    else {
      res.send("Data Not Found");
    }
  } catch (error) {
    // Handle any errors that occur during the retrieval process
    res.status(500).json({ error: "Failed to retrieve Event data" });
  }
});

route.post("/community", async (req, res) => {
  // Retrieve all staff data
  const Event_detail = {
    EventId: req.body.Event_id
  };
  try {
    const EventData = await Event.findOne({_id: Event_detail.EventId }); // Retrieve all staff data
    if(EventData) {
      const arr = EventData.invitedCommunity
      const ProgramData = await Program.find({_id: { $in: arr}});
      if(ProgramData) {
        const arr2 = [];
        for (let index = 0; index < ProgramData.length; index++) {
          const element = ProgramData[index];
          arr2.push(element.name);
        }
        res.send(arr2)
      }
      else{
        res.send("Program Not, Found")
      }
    }
    else {
      res.send("Data Not Found");
    }
  } catch (error) {
    // Handle any errors that occur during the retrieval process
    res.status(500).json({ error: "Failed to retrieve Event data" });
  }
});



exports = module.exports = {
  EventDetails: route,
};
