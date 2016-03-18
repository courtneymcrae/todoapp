var
  express = require('express'),
  app = express(),
  ejs = require('ejs'),
  logger = require('morgan'),
  path = require('path'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  apiRoutes = require('./routes/api.js'),
  cors = require('cors')
  
  mongoose.connect('mongodb://localhost/todoapp', function(err){
  if(err) throw err
  console.log('Connected to MongoDB')
})

//sets up middlewre
app.use(cors());

app.set('view engine', 'ejs')

// get all data/stuff of the body (POST) parameters
app.use( bodyParser.json() )
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
app.use(logger('dev'))
// set the static files location /public/img will be /img for users
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req,res){
  console.log('getting index?')
  res.render('index')
})

 // whenever we get a request starting with /api
app.use('/api', apiRoutes)

// startup our app at http://localhost:3000
app.listen(3000, function(){
  console.log('Server Listening on port 3000...')
})