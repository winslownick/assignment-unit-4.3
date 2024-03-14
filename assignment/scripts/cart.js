console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

const addItem = item => {
 basket.unshift(item);
 console.log(`Basket is ${basket}`); 
 return true;
  
} 

addItem('apple');
addItem('Sandwich');
addItem('wine')
addItem('assorted meats')

console.log(`This is what's in my basket of items: ${basket} `);


const listItems = () => {
 for(i = 0; i < basket.length; i++) {
  console.log(basket[i])
 }
}
listItems();

const empty = () => {
 basket.length = 0;
 console.log(basket);
}
 









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
