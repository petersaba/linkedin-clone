const fs = require('fs');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

module.exports.base64ToImage = (base64_image, file_name) => {
    base64_str = base64_image.split(',')[1];

    const buffer = new Buffer.from(base64_str, 'base64');
    fs.writeFileSync(`./images/${file_name}.jpg`, buffer);

    return file_name;
}

module.exports.sendEmail = (receiver_email, subject, content) => {
    const options = {
        from: process.env.EMAIL,
        to: receiver_email,
        subject: subject,
        text: content
    }

    transporter.sendMail(options, (err, info) => {
        if(err){
            console.log(err);
            return;
        }
        console.log("Sent " + info.response);
    });
}

module.exports.sendEmailsToUsers = (users, subject, content) => {
    for(const i of users){
        sendEmail(i.email, subject, content);
    }
}