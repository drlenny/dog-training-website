require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var path = require('path');
var nodemailer = require('nodemailer');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname + '/node_modules/bootstrap/dist')));
app.set('view engine', 'ejs');
app.use(express.json())
app.use(bodyParser.urlencoded({
  extended:true
}));


app.get('/', function(req, res){
    res.locals.title = "Daniel Lenihan: Dog Trainer";
    res.render("home");
})

app.get('/contact', function (req, res) {
  res.locals.title = "Contact";
  res.render("contact");
})

app.get('/local-links', function (req, res) {
  res.locals.title = "Local Links";
  res.render("local-links");
})

app.get('/reviews', function (req, res) {
  res.locals.title = "Reviews";
  res.render("reviews");
})

// services .get
app.get('/services', function (req, res) {
  res.locals.title = "Training Services";
  res.render("services/service-intro");
})
app.get('/behavior-therapy', function (req, res) {
  res.locals.title = "Behavior Therapy";
  res.render("services/behavior-therapy");
})

app.get('/obedience-training', function (req, res) {
  res.locals.title = "Obedience Training";
  res.render("services/obedience-training");
})
app.get('/puppy-training', function (req, res) {
  res.locals.title = "Puppy Training";
  res.render("services/puppy-training");
})
app.get('/what-to-expect', function (req, res) {
  res.locals.title = "What To Expect";
  res.render("services/what-to-expect");
})

// email form submission
app.post('/contact', (req, res) => {

  console.log(req);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lenihand22@gmail.com',
      pass: process.env.CONTACT_PASSWORD
    }
  });
  
  var mailOptions = {
    from: 'lenihand22@gmail.com',
    to: 'lenihand22@gmail.com',
    subject: 'Sending Email using Node.js',
    text: `FROM: ${req.body.firstName} ${req.body.lastName} \nEMAIL: ${req.body.emailAddress} \nPHONE NUMBER: ${req.body.phoneNumber} \nBEST TIMES TO CALL: ${req.body.bestTime} \nDOG NAME: ${req.body.dogName} \nDOG AGE: ${req.body.dogAge} \nDOG BREED: ${req.body.dogBreed} \n\nMESSAGE: ${req.body.message}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.json({message: "message not sent"});
      res.redirect("/contact")
    } else {
      console.log('Email sent: ' + info.response);
      res.redirect("/")
    }
  });
})

// 404 handling
app.all('*', function (req, res) {
  res.locals.title = "Page Not Found";
  res.render("404");
})

let port = process.env.PORT;

if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log(`Server started on ${port} succesfully`);
});