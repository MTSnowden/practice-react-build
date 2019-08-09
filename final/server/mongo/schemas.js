const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Auth = new Schema({
  userName: String,
  password: String
})

const projectSchema = new Schema({
  client: String,
  title: String,
  description: String,
  charge: String,
  due: String,
});

module.exports = { Auth, projectSchema }