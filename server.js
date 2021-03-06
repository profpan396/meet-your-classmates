require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');

require('./config/database');

// Require controllers here

const app = express();

// add in when the app is ready to be deployed
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());  // <--- this looks for json from A client and turns into js object aka req.body
app.use(express.static(path.join(__dirname, 'build')));
// Configure the auth middleware
// This decodes the jwt token, and assigns
// the user information to req.user
app.use(require('./config/auth')); 
// api routes must be before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api', require('./routes/api/likes'));
app.use('/api', require('./routes/api/dislikes'));
// "catch all" route
// This line is what will render our final code our final react app in production (aka on heroku)
// the build folder comes from npm run build
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});
