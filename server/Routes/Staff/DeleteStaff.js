const route = require('express').Router()
const Staff = require("../../model/staffSchema");


// to login into admin account
route.post("/", async (req, res) => {
    const StaffDetails = {
        name: req.body.name,
        AdharCard_No: req.body.AdharCard_No,
        Date_of_Birth: req.body.Date_of_Birth,
        email: req.body.email,
        mobile_no: req.body.mobile_no,
        Role: req.body.Role,
        Experience: req.body.Experience,
        Assigned_Community: req.body.Assigned_Community,
    };
    // console.log(adminDetails);

    const ExistingStaff = await Staff.findOne({ AdharCard_No: StaffDetails.AdharCard_No, Flag: true});
    try {
        if (ExistingStaff) {
                ExistingStaff.Flag = false;
                await ExistingStaff.save();
                console.log("Staff Deleted");
                res.send('Staff Deleted');
        } else {
        // Creating a new User object
            console.log("Staff Does Not Exist");
            res.send('Staff Does Not Exist');
        }
    } catch (err) {
        console.log(err);
        res.status(400).send("Staff was not Delete , some error occured");
    }
  });

exports = module.exports = {
    staffDelete: route
}