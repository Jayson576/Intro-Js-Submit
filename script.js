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

let birthYear = 1984;
let futureYear  = 2012;
let age  = futureYear - birthYear;
console.log('I will be either ' + age + ' or ' + (age - 1));

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let age = 28;
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
