


export function categorized (drink, catid){

        if(drink.category.id === catid){
           return drink;
        }
    }


    export function singledrink(list, did){
       const thedrink = [];
       for (var i=0; i<list.length; i++ ){
          if(list[i].id ===did){
             thedrink.push(list[i].id);//0
             thedrink.push(list[i].drinkname);//1
             thedrink.push(list[i].size);//2
             thedrink.push(list[i].price);//3
          }
       }
       return thedrink;
    }