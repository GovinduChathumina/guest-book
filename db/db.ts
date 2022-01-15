import mongoose = require('mongoose');

import UserDoc = require('./models/user.model')
export const connectionString = 'mongodb+srv://govindu:961592380v@testapp.lnxtj.mongodb.net/test';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

export const models = { UserDoc };