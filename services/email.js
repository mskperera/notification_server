const nodemailer = require('nodemailer');

// Create a transporter using your email service (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD,
  },
});


// Function to send email notifications
const sendEmail = async (recipientEmail, subject,isBodyHtml,body) => {
    console.log('process.env.SENDER_EMAIL',process.env.SENDER_EMAIL)
    try {      
        // Define the email options
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: recipientEmail,
            subject:subject
        };

        if(isBodyHtml){
            mailOptions.html=body;
        }else
        {
            mailOptions.text=body;
        }

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return info.response;
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports={
    sendEmail
}

// Example usage
// sendEmail(
//     'recipient@example.com',
//     '12345',
//     'Support Request',
//     'I need help with an issue.',
//     'https://helpdesk.example.com/ticket/12345'
// );
