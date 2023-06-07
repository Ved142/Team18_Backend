const route = require("express").Router();
const Community = require("../../model/programSchema");

route.post("/", async (req, res) => {
  console.log(req.name);
  const CommunityDetails = {
    name: req.body.name,
    description: req.body.description,
    numberOfActivities: req.body.numberOfActivities,
    startDate: req.body.startDate,
  };
  console.log(CommunityDetails);

  const ExistingCommunity = await Community.findOne({
    name: CommunityDetails.name,
  });
  try {
    if (ExistingCommunity) {
      if (ExistingCommunity.Flag == false) {
        ExistingCommunity.Flag = true;
        ExistingCommunity.lastUpdated = Date.now();
        await ExistingCommunity.save();
        console.log("Community Registered");
        res.send("new Community Registered");
      } else {
        console.log(
          `Community With this ${CommunityDetails.name} Already Existes`
        );
        res.send(
          `Community With this  ${CommunityDetails.name}  Already Existes`
        );
      }
    } else {
      const newCommunity = new Community(CommunityDetails);

      // Saving the user information
      const savedCommunity = await newCommunity.save();
      console.log("Community Registered");
      res.send("new Community Registered");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Community was not registered , some error occured");
  }
});

exports = module.exports = {
  CommunityAdd: route,
};
