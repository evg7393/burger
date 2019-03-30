var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))


app.use(methodOverride('__method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//added the below route for step 5 in order to GET
var routes = require ('./controllers/routes');
app.use('/', routes);

var port = process.env.PORT || 3000;
app.listen (port, function (){
    console.log("Server Listening on: http://localhost:" + port);
});