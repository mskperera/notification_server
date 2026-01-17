const {sendEmail } = require("../services/email.js");
const { sendAccountVerification } = require("../services/emailMessages.js");


// exports.sendEmailCont = async (req, res) => {
//     try {
//       const {sendTo,subject,verificationCode,recipientName} = req.body;
 
//      // const subject='Verify Your Account';
//       //const verificationCode='000023';
//       const  result = await sendAccountVerification(sendTo,subject,recipientName,verificationCode)


//       res.json(result);
//     } catch (error) {
//       console.error("Error sending email:", error);
//     }
//   };



  exports.sendEmail = async (req, res) => {
    try {
      const {recipientEmail,subject,isHtmlBody,messageBody} = req.body;
 
     // const subject='Verify Your Account';
      //const verificationCode='000023';
      const result = await sendEmail(recipientEmail,subject,isHtmlBody,messageBody);
      
      res.json(result);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

 
