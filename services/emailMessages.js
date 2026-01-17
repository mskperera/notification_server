const { sendEmail } = require("./email");
const path = require("path");
const ejs = require('ejs');
const fs = require('fs');

// exports.sendAccountVerification = async (recipientEmail, subject,recipientName,verificationCode) => {
//     try {
    
//         const subjectEmail=subject;
    
//        // const encrypedParamData=encryptAES(paramData,process.env.AES_ENCRYPTION_SECRET_KEY_HEX,process.env.INITIALIZATION_VECTOR_HEX);
//         const htmlBodyConent={
//             recipientName,verificationCode
//            // unSubsrcibtionUrl:`${CLIENT_URL}/notification/email/unsubscribe/confirmation/${encrypedParamData}`,
//          }
   
//          const emailTemplatePath = path.join(__dirname, '../templates/accountVerification.ejs');
//          // Load the email template
//          const emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");
//                  // Render the email template with dynamic data
//                  const htmlBody = ejs.render(emailTemplate, htmlBodyConent);
                 
//         // Send the email
//         const result = await sendEmail(recipientEmail,subjectEmail,true,htmlBody);
//        return result;
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
//   };
  

