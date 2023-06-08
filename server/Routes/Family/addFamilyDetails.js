const route = require("express").Router();
const Family = require("../../model/familySchema");

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

    const savedFamily = await newFamily.save();
    res.json(savedFamily);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the family." });
  }
});

exports = module.exports = {
  addFamilyDetails: route,
};
