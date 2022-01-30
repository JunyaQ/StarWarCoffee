//const Faker = require('Faker');

const db = require('../config/connection');
const { User, Category, Drink, Cart} = require('../models');


db.once('open', async () => {
  await User.deleteMany({});
  await Category.deleteMany({});
  await Drink.deleteMany({});
  await Cart.deleteMany({});
  //await Addin. deleteMany({});

 await User.collection.insertMany( [{
   firstName:"Admin",
   lastName:"Qiao",
   email:"admin@123.com",
   password:"111111"
 },
 {
  firstName:"test",
  lastName:"testlast",
  email:"test@123.com",
  password:"123321"
 }])

 const categories = await Category.insertMany([{
   catname:"Hot Coffee",
   //subcatname:"first-subcat",
 },
 {
  catname:"Cold Coffee",
  //subcatname:"first-second-subcat",
},

{
  catname:"Hot tea",
  //subcatname:"second-subcat",

},
{
  catname:'cold tea',
}])
//console.log(categories);
await Drink.insertMany([
  {
    drinkname:"cold brew",
    size:"grande",
    price:1.23,
    category:[categories[0]._id],
    //addin:''
  },
  {
    drinkname:'Americano',
    size:'grande',
    price:2.23,
    category:[categories[1]._id],
    //addin:''
  },
  {
    drinkname:'test third drink',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
  }
  
])

//cart data (before mutation)



console.log('done seeds');
process.exit(0);
//
})