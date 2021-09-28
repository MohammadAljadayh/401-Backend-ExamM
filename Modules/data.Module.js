'use strict'
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FruiteSchema = new Schema({
 
  name:String,
  image:String,
  price:String,
ownerEmail:String

});

const dataModel = mongoose.model("Product", FruiteSchema);

module.exports = dataModel;

