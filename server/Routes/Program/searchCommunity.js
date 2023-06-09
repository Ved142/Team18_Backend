const route = require("express").Router();
const Program = require("../../model/programSchema");

route.get("/", async (req, res) => {
    try {
        const communityData = await Program.find({ name: req.query.name }).populate("families");
        res.json(communityData);
    } catch (error) {
        // Handle any errors that occur during the retrieval process
        res.status(500).json({ error: "Failed to retrieve Community data" });
    }
});

exports = module.exports = {
    searchCommunity: route,
};