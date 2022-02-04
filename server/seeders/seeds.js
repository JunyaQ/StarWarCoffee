//const Faker = require('Faker');

const db = require('../config/connection');
const { User, Category, Drink} = require('../models');


db.once('open', async () => {
  await User.deleteMany({});
  await Category.deleteMany({});
  await Drink.deleteMany({});
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
  catname:"Hot Tea",//2
  //subcatname:"second-subcat",
},
{
  catname:'Cold Tea',//3
}])
//console.log(categories);


await Drink.insertMany([
  {
    drinkname:"Cafe Misto",
    size:"grande",
    price:1.23,
    category:[categories[0]._id],
    description: "Some description about cafe misto"
    //addin:''
  },
  {
    drinkname:'Americano',
    size:'grande',
    price:2.23,
    category:[categories[0]._id],
    description: "Some description about americano"
    //addin:''
  },
  {
    drinkname:'Irish Cream Americano',
    size:'grande',
    price:2.23,
    category:[categories[0]._id],
    description: "Some description about irish cream americano"
    //addin:''
    
  },
  {
    drinkname:'Cappuccino',
    size:'grande',
    price:2.23,
    category:[categories[0]._id],
    description: "Some description about cappuccino"
    //addin:''
  },
  {
    drinkname:'Salted Caramel Cold Brew',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
    description: "Some description about calted caramel cold brew"
  },
  {
    drinkname:'Vanilla Sweet cream Cold Brew',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
    description: "Some description about vanilla sweet cream cold brew"
  },
  {
    drinkname:'Cold Brew',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
    description: "Some description about cold brew"
  },
  {
    drinkname:'Chai Tea',
    size:'grande',
    price:1.50,
    category:[categories[2]._id],
    description: "Some description about chai t"
  },
  {
    drinkname:'London Fog Tea Latte',
    size:'grande',
    price:1.50,
    category:[categories[2]._id],
    description: "Some description about london fog latte"
  },
  {
    drinkname:'Earl Grey Tea',
    size:'grande',
    price:1.50,
    category:[categories[2]._id],
    description: "Some description about earl grey"
  },
  {
    drinkname:'Iced Chai Tea Latte',
    size:'grande',
    price:1.50,
    category:[categories[3]._id],
    description: "Some description about iced chai"
  },
  {
    drinkname:'Iced Chai Tea Latte',
    size:'grande',
    price:1.50,
    category:[categories[3]._id],
    description: "Some description about iced chai latte"
  },
  {
    drinkname:'Iced Matcha Tea Latte',
    size:'grande',
    price:1.50,
    category:[categories[3]._id],
    description: "Some description about iced matcha"
  },

])

//cart data (before mutation)



console.log('done seeds');
process.exit(0);
//
})