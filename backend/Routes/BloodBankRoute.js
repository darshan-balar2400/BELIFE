const express = require("express")
const route = new express.Router();

const { SubmitBlood } = require("../Controllers/BloodBankController");

/**** REGISTER DONOR */
route.post("/looking/new",SubmitBlood);

module.exports = route;