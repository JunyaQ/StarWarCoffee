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
   catname:"Hot Coffee",//0
   //subcatname:"first-subcat",
 },
 {
  catname:"Cold Coffee",//1
  //subcatname:"first-second-subcat",
},
{
  catname:"Hot tea",//2
  //subcatname:"second-subcat",
},
{
  catname:'cold tea',//3
}])
//console.log(categories);


await Drink.insertMany([
  {
    drinkname:"Cafe Misto",
    size:"grande",
    price:1.23,
    category:[categories[0]._id],
    //addin:''
  },
  {
    drinkname:'Pike Place Roast',
    size:'grande',
    price:2.23,
    category:[categories[0]._id],
    //addin:''
  },
  {
    drinkname:'Americano',
    size:'grande',
    price:2.23,
    category:[categories[0]._id],
    //addin:''
  },
  {
    drinkname:'Brow Sugar Oat Americano',
    size:'grande',
    price:2.23,
    category:[categories[0]._id],
    //addin:''
  },
  {
    drinkname:'Iris Cream Americano',
    size:'grande',
    price:2.23,
    category:[categories[0]._id],
    //addin:''
    
  },
  {
    drinkname:'Cappuccino',
    size:'grande',
    price:2.23,
    category:[categories[0]._id],
    //addin:''
  },
  {
    drinkname:'Esoresso',
    size:'grande',
    price:2.23,
    category:[categories[0]._id],
    //addin:''
  },
  {
    drinkname:'Flat White',
    size:'grande',
    price:2.23,
    category:[categories[0]._id],
    //addin:''
  },
  {
    drinkname:'Irish Cream Cold Brew',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
  },
  {
    drinkname:'Salted Caramel Cold Brew',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
  },
  {
    drinkname:'Vanilla Sweet cream Cold Brew',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
  },
  {
    drinkname:'Cold Brew',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
  },
  {
    drinkname:'Iced Americano',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
  },
  {
    drinkname:'Nitro Cold Brew',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
  },
  {
    drinkname:'Vanilla Sweet Cream Nitro Cold Crew',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
  },
  {
    drinkname:'Iced Coffee',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
  },
  {
    drinkname:'Iced Shaken Espresso',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
  },
  {
    drinkname:'Iced Honey Flat White',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
  },
  {
    drinkname:'Chai Tea',
    size:'grande',
    price:1.50,
    category:[categories[2]._id],
  },
  {
    drinkname:'Chai Tea Latte',
    size:'grande',
    price:1.50,
    category:[categories[2]._id],
  },
  {
    drinkname:'London Fog Tea Latte',
    size:'grande',
    price:1.50,
    category:[categories[2]._id],
  },
  {
    drinkname:'Earl Grey Tea',
    size:'grande',
    price:1.50,
    category:[categories[2]._id],
  },
  {
    drinkname:'Royal English Breakfast Tea',
    size:'grande',
    price:1.50,
    category:[categories[2]._id],
  },
  {
    drinkname:'Matcha Tea Latte',
    size:'grande',
    price:1.50,
    category:[categories[2]._id],
  },
  {
    drinkname:'Honey Citruc Mint Tea',
    size:'grande',
    price:1.50,
    category:[categories[2]._id],
  },
  {
    drinkname:'Iced Chai Tea Latte',
    size:'grande',
    price:1.50,
    category:[categories[3]._id],
  },
  {
    drinkname:'Iced Chai Tea Latte',
    size:'grande',
    price:1.50,
    category:[categories[3]._id],
  },
  {
    drinkname:'Iced Black Tea',
    size:'grande',
    price:1.50,
    category:[categories[3]._id],
  },
  {
    drinkname:'Iced Black Tea Lemonade',
    size:'grande',
    price:1.50,
    category:[categories[3]._id],
  },
  {
    drinkname:'Iced Matcha Tea Latte',
    size:'grande',
    price:1.50,
    category:[categories[3]._id],
  },
  {
    drinkname:'Iced Peach Green Tea',
    size:'grande',
    price:1.50,
    category:[categories[3]._id],
  },
  {
    drinkname:'Iced Green Tea',
    size:'grande',
    price:1.50,
    category:[categories[3]._id],
  },
  {
    drinkname:'Iced Peach Green Tea Lemonade',
    size:'grande',
    price:1.50,
    category:[categories[3]._id],
  },
])

//cart data (before mutation)



console.log('done seeds');
process.exit(0);
//
})