const express    = require('express'),
      stripe     = require('stripe')('sk_test_ERALKPuRF0C65yXlyDjO8dhd'),
      bodyParser = require('body-parser'),
      exphbs     = require('express-handlebars'),
      app        = express();

//app config//
app.engine('handlebars',exphbs({defaultLayout : 'main'}));//middleware for handlebars// 
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('${__dirname}/public'));//static folder for images and stylesheets//


//Index Route//
app.get('/', (req, res) => {
    res.render('index');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server is running');
});
 