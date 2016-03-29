var express = require('express');
var app = express();
var path = require("path")

// set the port of our application
// process.env.PORT lets the port be set by Heroku
app.set("port", process.env.PORT || 8080)
  // set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(path.resolve(__dirname, "./public")));

// set the home page route
app.get("*", function(req, res) {
  // ejs render automatically looks in the views folder
  var indexViewPath = path.resolve(__dirname, "./public/view/index.ejs");
    res.render(indexViewPath);
});

app.listen(app.get('port'), function() {
  console.log('Our app is running on http://localhost:' + app.get('port'));
});
