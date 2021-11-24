var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'earthclaninfo@gmail.com',
      pass: 'nkgnkzodkxlmntle'
    }
  });
  
  var mailOptions = {
    from: 'earthclaninfo@gmail.com',
    to: 'zpbandj@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });