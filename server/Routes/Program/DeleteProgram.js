const route = require("express").Router();
const Staff = require("../../model/programSchema");

route.post("/", async (req, res) => {
  const StaffDetails = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    numberOfActivities: req.body.numberOfActivities,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    lastUpdated: req.body.lastUpdated,
    Assigned_Community: req.body.Assigned_Community,
  };
  // console.log(adminDetails);

  const ExistingStaff = await Staff.findOne({
    id: StaffDetails.id,
    Flag: true,
  });
  try {
    if (ExistingStaff) {
      ExistingStaff.Flag = false;
      await ExistingStaff.save();
      console.log("Community Deleted");
      res.send("Community Deleted");
    } else {
      // Creating a new User object
      console.log("Community Does Not Exist");
      res.send("Community Does Not Exist");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Staff was not Delete , some error occured");
  }
});

exports = module.exports = {
  CommunityDelete: route,
};
