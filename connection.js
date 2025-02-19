// const mongoosh = require ('mongose');
// mongoosh.connect("mongodb://localhost:27017/local").then(()=>{
//     console.log('Successfully connected')
// }).catch((error)=>{
//     console.log('DB Connection Failed',error)
// });


// const mongoosh = require('mongoose');

// mongoosh.connect("mongodb://localhost:27017/local").then(()=>{
//     console.log('Successfully Connected')
// }).catch((error)=>{
//     console.log('DB Connection Failed',error)
// })





const mongoosh = require('mongoose'); // Correct package name

mongoosh.connect("mongodb://localhost:27017/local ",  )
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((error) => {
    console.error('DB Connection Failed:', error);
  });
