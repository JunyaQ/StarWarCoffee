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
   name:"Hot Coffee",//0
   //subcatname:"first-subcat",
 },
 {
  name:"Cold Coffee",//1
  //subcatname:"first-second-subcat",
},
{
  name:"Hot Tea",//2
  //subcatname:"second-subcat",
},
{
  name:'Cold Tea',//3
}])
//console.log(categories);


await Drink.insertMany([
  {
    name:"Cafe Misto",
    size:"grande",
    price:1.23,
    category:[categories[0]._id],
    description: "Some description about cafe misto"
    //addin:''
  },
  {
    name:'Americano',
    size:'grande',
    price:2.23,
    category:[categories[0]._id],
    description: "Some description about americano"
    //addin:''
  },
  {
    name:'Irish Cream Americano',
    size:'grande',
    price:2.23,
    category:[categories[0]._id],
    description: "Some description about irish cream americano"
    //addin:''
    
  },
  {
    name:'Cappuccino',
    size:'grande',
    price:2.23,
    category:[categories[0]._id],
    description: "Some description about cappuccino"
    //addin:''
  },
  {
    name:'Salted Caramel Cold Brew',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
    description: "Some description about calted caramel cold brew"
  },
  {
    name:'Vanilla Sweet cream Cold Brew',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
    description: "Some description about vanilla sweet cream cold brew"
  },
  {
    name:'Cold Brew',
    size:'tall',
    price:1.11,
    category:[categories[1]._id],
    description: "Some description about cold brew"
  },
  {
    name:'Chai Tea',
    size:'grande',
    price:1.50,
    category:[categories[2]._id],
    description: "Some description about chai t"
  },
  {
    name:'London Fog Tea Latte',
    size:'grande',
    price:1.50,
    category:[categories[2]._id],
    description: "Some description about london fog latte"
  },
  {
    name:'Earl Grey Tea',
    size:'grande',
    price:1.50,
    category:[categories[2]._id],
    description: "Some description about earl grey"
  },
  {
    name:'Iced Chai Tea Latte',
    size:'grande',
    price:1.50,
    category:[categories[3]._id],
    description: "Some description about iced chai"
  },
  {
    name:'Iced Chai Tea Latte',
    size:'grande',
    price:1.50,
    category:[categories[3]._id],
    description: "Some description about iced chai latte"
  },
  {
    name:'Iced Matcha Tea Latte',
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