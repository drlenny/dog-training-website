const express = require("express");
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname + '/node_modules/bootstrap/dist')));
app.set('view engine', 'ejs');
app.use(express.json())


app.get('/', function(req, res){
    res.render("home");
})

app.get('/contact', function(req, res){
  res.render("contact");
})

app.get('/local-links', function(req, res){
  res.render("local-links");
})

app.get('/reviews', function(req, res){
  res.render("reviews");
})

app.get('/404', function(req, res){
  res.render("404");
})

// about .get
app.get('/about', function(req, res){
  res.render("about/about-intro");
})
app.get('/in-home', function(req, res){
  res.render("about/in-home");
})
app.get('/lifetime', function(req, res){
  res.render("about/lifetime");
})
app.get('/why', function(req, res){
  res.render("about/why");
})

// dog-behavior .get
app.get('/dog-behavior', function(req, res){
  res.render("dog-behavior/behavior-intro");
})
app.get('/aggression', function(req, res){
  res.render("dog-behavior/aggression");
})
app.get('/anxiety', function(req, res){
  res.render("dog-behavior/anxiety");
})
app.get('/barking', function(req, res){
  res.render("dog-behavior/barking");
})
app.get('/destructive', function(req, res){
  res.render("dog-behavior/destructive");
})
app.get('/ocd', function(req, res){
  res.render("dog-behavior/ocd");
})
app.get('/potty', function(req, res){
  res.render("dog-behavior/potty");
})
app.get('/rescue', function(req, res){
  res.render("dog-behavior/rescue");
})

// services .get
app.get('/services', function(req, res){
  res.render("services/service-intro");
})
app.get('/services', function(req, res){
  res.render("services/service-intro");
})
app.get('/behavior-therapy', function(req, res){
  res.render("services/behavior-therapy");
})
app.get('/gold-service', function(req, res){
  res.render("services/gold-service");
})
app.get('/governing-principle', function(req, res){
  res.render("services/governing-principle");
})
app.get('/obedience-training', function(req, res){
  res.render("services/obedience-training");
})
app.get('/puppy-training', function(req, res){
  res.render("services/puppy-training");
})
app.get('/what-to-expect', function(req, res){
  res.render("services/what-to-expect");
})

let port = process.env.PORT;

if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function () {
  console.log(`Server started on ${port} succesfully`);
});