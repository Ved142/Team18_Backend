const route = require("express").Router();
const Family = require("../../model/familySchema");
const Community = require("../../model/programSchema");
const Program = require("../../model/programSchema");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

// POST /family/add
route.post("/", async (req, res) => {
  try {
    const {
      familyId,
      community,
      MPIscore,
      members,
      cookingFuel,
      sanitation,
      drinkingWater,
      electricity,
      house,
      assets,
    } = req.body;

    const newFamily = new Family({
      familyId,
      community,
      MPIscore,
      members,
      cookingFuel,
      sanitation,
      drinkingWater,
      electricity,
      house,
      assets,
    });

    console.log(familyId, community);
    console.log(typeof familyId);

    const savedFamily = await newFamily.save();
    // await Community.findOneAndUpdate(
    //   { name: community },
    //   { $addToSet: { families: `${familyId}` } }, // Add the new familyId to the array if it's not already there
    //   { new: true }
    // );

    await Program.findOneAndUpdate(
      { name: community },
      { $addToSet: { families: savedFamily._id } }, // Add the new familyId to the array if it's not already there
      { new: true }
    );

    res.json(savedFamily);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: error });
  }
});

exports = module.exports = {
  addFamilyDetails: route,
};
