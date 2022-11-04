const express = require("express");
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname + '/node_modules/bootstrap/dist')));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
app.set('view engine', 'ejs');
app.use(express.json())


app.get('/', function(req, res){
    // res.sendFile(__dirname + '/index.html')

    res.render("home");
})

let port = process.env.PORT;

if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function () {
  console.log(`Server started on ${port} succesfully`);
});