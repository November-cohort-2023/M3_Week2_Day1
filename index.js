const express = require('express')

const app = express()

const mongoose = require('mongoose')

/* 

Setting up mongoose

1. import mongoose using the require statement

2. connect to mongoose using the mongoose.connect() method

3. create our model

*/

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

  //CRUD

  /* 

READ:

.find(): fetches all the documents

.find({rating:10}): fetches all the documents that have a 10 rating

.findOne({title:"Barbie"}): fetches 1 document based on the query given in the argument. Will return barbie movie document

.findOneById('65f12531dc4084e350bd5f4f'): fetches 1 document based on the id given in the arguement



CREATE:

.create({title:"New Movie",director:"John Smith"}): will create a new document with the field values given in the arguement. Argument is an object

.insertMany([{title:"Star Wars",director:"George Lucas"},{title:"Star Wars 2",director:"George Lucas"}]): will create many new documents with the field values given in the arguement. Argument is an array of objects


UPDATE:

.updateOne({title:"Star Wars"}, {rating:9}): will find the movie with the query from the first arugment and change the rating to 9. 

.updateMany({director:"George Lucas"}, {rating:9}): will find all the movies with the director being george lucas and change the rating to 9. 

.findByIdAndUpdate('65f12531dc4084e350bd5f4f',{title:"Changed Title"}): Finds a document by its _id and updates it.



DELETE:

.deleteOne(): deletes 1 document based on the query in the arument

.deleteMany(): deletes all the documents that match the query provided in the arguemnt

.findByIdAndDelete('65f12531dc4084e350bd5f4f')



*/


// READ

// .find(): gets All my documents in a collection

Movie.find({rate:9.2})
.then((result)=>{
    console.log(result)
})





  


  app.listen(5005)