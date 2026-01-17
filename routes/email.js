const express = require('express');
const router = express.Router();

const {sendEmail } = require("../controller/email");

router.post("/notification/email/send", sendEmail);


module.exports = router;


