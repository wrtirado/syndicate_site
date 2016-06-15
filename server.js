// creating all my variables
var
  express     = require('express'),
  app         = express(),
  bodyParser  = require('body-parser'),
  logger      = require('morgan'),
  cors        = require('cors'),
  port        = process.env.PORT || 8080,
  path        = require('path')
  // apiRoutes   = require('./api_routes'),
  // mongoose    = require('mongoose'),
  // databaseURL = 'mongodb://localhost:27017/testing',
  // mlabURI     = 'mongodb://wrtirado:Iamtheman23@ds011281.mlab.com:11281/mapigatordb'

  // var db = mongoose.createConnection("localhost", "mapigator-app")
  // connect to my database

  // Local Connection
  // mongoose.connect(databaseURL, function(err) {
  //   if (err){
  //     console.log("db error: ", err)
  //   }
  //   else {console.log("connected to THE MONGODS")}
  // })

  // Heroku Connection
  // mongoose.connect(mlabURI, function(err) {
  //   if (err){
  //     console.log("db error: ", err)
  //   }
  //   else {console.log("connected to THE MONGODS")}
  // })

  // setting up all my middleware
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(__dirname, './client_side')))
// app.use('/api/v1', apiRoutes)

  // setting up my localhost connection
app.listen(port, function(err){
  if(err){
    console.log(err)
  }
  else {console.log('Server running on port: ', port)}
})
