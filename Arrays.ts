1//create an arrays named fruits thats contains the following strings elements:
let fruits = ["apple","banana","mango","orange"];

2//declare an arrays named numbers that can contain only number elemnts and initialize it with the values 10,20,30 and 40
let number = ["10","20","30","40"];

3//access the third element of the fruits array and assign it to a variable named thirdfruit.
let thirdfruit = ["pineapple","cherry","stawberry","blue berry"];

thirdfruit[2] = "25"; 4//change the second element of the numbers arrays to 25.

thirdfruit.push("grape"); 5//add the element grape to the end of the fruits arrays using the method.

//console.log("thirdfruit",thirdfruit);

6//remove the last element
let lastfruit = ["graps","watermalan","pomegrant","apple","orange"];

lastfruit.pop();

lastfruit.shift(); 7//remove the first element

lastfruit.unshift("kiwi"); 8//add the first element

fruits.splice(1, 2); 9//remove 2 elements from the fruits arrays starting from index 1 using the method.
console.log(fruits);

fruits.splice(2, 0, 'pineapple', 'pear'); 10//insert the elements pineapple and pear at index 2 of the fruits arrays using the method.
console.log(fruits);

console.log("lastfruit",lastfruit);
console.log(lastfruit[1]);


11//create a new array named citrusfruits that contain the first two elements.
let citrusfruits:string[] =["banana","mango","kiwi","graps"];
console.log(citrusfruits);
console.log(citrusfruits[1]);
console.log(citrusfruits[2]);

12//create a new array named last two fruit that contain the last two element.
let lasttwofruits:string[] =["date","elderberry","apple","mango","watermalan"];
console.log(lasttwofruits);
console.log(lasttwofruits[3]);
console.log(lasttwofruits[4]);



