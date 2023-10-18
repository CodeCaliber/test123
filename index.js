// while (condition)
//      #Code executed here
//      #while condtion is true

/*
var x = 0

while(x < 5){
    console.log("x is currently "+ x);
    console.log("x is still less than 5, adding 1 to x");

    x = x + 1;
}

var x = 0;

while(x < 5){
    console.log("x is currently "+ x);
    
    if (x === 3){
        console.log("x is equal to 3, BREAK")
        break;
    }
    console.log("x is still less than 5, adding 1 to x");
    x = x + 1;
    
}

for (statement 1; statement 2; statement 3;)
    code block to be executed

statement 1 is executed before the loop starts
statement 2 defines the condtion for running the loop
statement 3 is executed each time after the loop has been executed.

for (i = 0; i < 5; i=i+1){
    console.log("Number is "+ i);
}

var word = "ABCDEFGHIJK"

for (i = 0; i < word.length;i++){
    console.log(word[i]);
}

var word = "ABABABABABABA"

for(i=0; i < word.length; i=i+2){
    console.log(word[i]);
}



function name(parameter1,parameter2,parameter3)
//code to execute

function hello(){
    console.log("hello world")
}

hello()

function helloYou(name){
    console.log("hello "+name);
}

helloYou("Samira");



function addNum(num1,num2){
    console.log(num1+num2);
}

addNum(30,20)

function helloSomeone(name="Haithem"){
    console.log("Hello " + name);
}

helloSomeone("Samira")

function formal (name="Sam", title="Sir"){
    return title+" "+name;
}

console.log("Welcome " +formal())

function times5(numInput){
    var result = numInput * 5
    return result;
}

times5(5)

console.log(numInput);


var v = "im global v"
var stuff = "Im global stuff"

function fun(stuff){
    console.log(v);
    stuff = "Reassign stuff inside func"
    console.log(stuff);
    
}

fun()
console.log(stuff);

var country1 ="Sweden"
var country2 = "Finland"
var country3 = "Germany"

var countries = [
    "Sweden",
    "Germany",
    "Finland"
];


var myString = "ABCDEFG";
console.log(myString[0]);

var mixed = [true,20,"string"];
console.log(mixed.length);
var myArr = ["one","two","three"];

var lastItem = myArr.pop()

myArr.push("new_item");

console.log(myArr);



console.log(myArr[myArr.length - 1]);

var matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix)

var arr = ["A","B","C"]

for(letter of arr){
    console.log(letter)
}

function Adder(name){
    console.log(name+" is awesome!")
}

var topics = ["Python","Javascript","Math"];

topics.forEach(Adder);
var mess = {a:"hello",b:["x","y","z"], c:{'inside':[4,5, ["weird"]]}};



carInfo['year'] = 2005;
carInfo['year'] += 1;




for (var key in carInfo){
    console.log(key);
    console.log(carInfo[key])
    console.log("\n");
}


var carInfo = {
     make:"Toyota", 
     year: 1999, 
     model: "Corolla", 
    carAlert: function(){
        console.log("Your car info is, make: "+this.make+ " year: " +this.year+ " model: "+this.model)
    }
    };
    
    carInfo.carAlert()
    
    
    var header = document.querySelector("h1")

header.style.color = "red";


function getRandomColor(){
    var letters = "0123456789ABCDEF"
    var color = "#"
    for(var i = 0; i < 6; i++){
        color+= letters[Math.floor(Math.random()* 16)];
    }
    return color
}

function changeHeaderColor(){
    colorInput = getRandomColor()
    header.style.color = colorInput;
}

setInterval("changeHeaderColor()",500);


*/















































