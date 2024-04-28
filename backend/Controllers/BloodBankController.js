const ErrorHandler = require("../Utils/ErrorHandler");
const CatchAsyncError = require("../Utils/CatchAsyncError");
const bcrypt = require("bcryptjs");
const BloodBank = require("../Models/LookingForBlood");


const SubmitBlood = CatchAsyncError(async (req, res, next) => {
    let data = req.body;
  
    if (!data) {
      return next(new ErrorHandler("Please provide data !", 404));
    }
  
    const newDonor = await BloodBank.create(data);
  
    if (!newDonor) {
      return next(
        new ErrorHandler(
          "Something went wrong !, Please try to provide some valid information !",
          400
        )
      );
    }
  
    return res.status(201).send({
      success: true,
      data: newDonor,
    });
  });

  module.exports = {
    SubmitBlood
  }