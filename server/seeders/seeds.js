//const Faker = require('Faker');

const db = require('../config/connection');
const { User, Category } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});
  await Category.deleteMany({})

 await User.collection.insertMany( [{
   firstName:'Admin',
   lastName:'Qiao',
   email:'admin@123.com',
   password:'111111'
 },
 {
  firstName:'test',
  lastName:'testlast',
  email:'test@123.com',
  password:'123321'
 },]);

 await Category.collection.insertMany([{
   catname:"firstcat",
   subcatname:"firstsubcat",
 },
{
  catname:"secondcat",
  subcatname:"secondsubcat",

}])


console.log('done seeds');
process.exit(0);
//
})