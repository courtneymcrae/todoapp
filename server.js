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