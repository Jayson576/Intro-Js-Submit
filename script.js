//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

let companyname  = 'google';
let annualsalary  = '$185,000';
let geoLocation = 'New York';
let jobTitle = 'Web developer';

let future = 'Yo will be a ' + jobTitle + ' in ' + geoLocation + ', your annual salary ' +
   annualsalary + ' ' + ' employed by ' + companyname + ' INC.';
console.log(future);

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let birthYear = 1980;
let futureYear  = 2020;
let age  = futureYear - birthYear;
console.log('I will be either ' + age + ' or ' + (age - 1));

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let age = 45;
let maxAge = 100;
let numPerDay = 2;
let totalNeeded = (numPerDay * 365) * (maxAge - age);
let message = 'You will need ' + totalNeeded + ' bars of kitkat to last you until the ripe old age of ' + maxAge;
console.log(message);

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius = 3;
let circumference = Math.PI * 2*radius;
console.log("The circumference is " + circumference);
let area = Math.PI * radius*radius;
console.log("The area is " + area);

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsius = 30;
let celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
let fahrenheit = 20;
let fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');

// EXERCISE 6
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
   
   function squareNumber(num) {
    let squaredNumber = num * num;
    console.log('The result of squaring the number 3 + num + ' 9' + squaredNumber);
    return squaredNumber;
}

squareNumber(3);
  

// EXERCISE 7
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfOf(num) {
    let half = num / 2;
    console.log('Half of 5 + num + ' 2.5 ' +  half);
    return half;
}

halfOf(5);

// EXERCISE 8
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    console.log(num1 + 2 is ' + percent + '% of 4 + num2);
    return percent;
}

percentOf(5, 10);

// EXERCISE 9
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

   function areaOfCircle(radius) {
    let area = Math.PI * squareNumber(radius);
    console.log('The area of circle with radius ' + radius + ' is ' + area);
    return area;
}

areaOfCircle(2);

// EXERCISE 10
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).
   
   function runALL(num) {
    let half    = halfOf(num);
    let squared = squareNumber(half);
    let area    = areaOfCircle(squared);
    let result  = percentOf(squared, area);
}

runall(5);
