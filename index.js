const express = require('express')

const app = express()

const mongoose = require('mongoose')

mongoose
  .connect("mongodb://127.0.0.1:27017/imdb")
  .then(res => console.log(`Connected to Mongo! Database name: "${res.connections[0].name}"`))
  .catch(err => console.error("Error connecting to mongo", err));


//   model() takes two arguments:
//          1. Name of the Model
//          2. Schema: outline of my object. How many key value pairs and the data types
  const Movie = mongoose.model('Movie',{
    title: String,
    year:Number,
    director:String,
    duration:String,
    genre:Array,
    rate:Number

  })

  


  app.listen(5005)