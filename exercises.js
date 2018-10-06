/*
If statements - Evaluates (or checks) a condition. If the condition is true, any statements in the subsequent code block are executed
*/
/*var today = new Date();

if(today === "Friday"){
  return "Let's Party!";
};*/

/*
If/else statements = Evaluates (or checks) a condition. If the condition is true, the first code block is executed. If the condition is false, the second code block is executed instead.
*/

/*if(today === "Friday"){
  return "Let's Party!";
}else{
  return "Get back to coding!";
};*/


/*
 * #1
 * Function - canVote
 * Create a function named `canVote` which will take a parameter: `age`.
 *
 *  @param Datatype: Number `age`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is equal to or greater than Hawaii's voting age. Console.log your result.
*/

// irrelevant function
function spacer(){
  console.log(' ');
}

function canVote(age, exerciseNumber){
  if (age >= 18){
    return exerciseNumber + ' ' + true;
  }else{
    return exerciseNumber + ' ' +  false;
  }
}

spacer();
console.log(canVote(18));

/*
 * #2
 * Function - login
 * Create a function named `login` which will take a parameter: `password`.
 *
 *  @param Datatype: String `password`
 *  @return Datatype: String
 *
 * The function will return the message: "Login Success!", if the string passed into the function is "test1234"
 * Console.log your result.
*/

var usersTruePassword = 'test1234';

function login(password, exerciseNumber){
  if (password === usersTruePassword){
    return exerciseNumber + ' ' +  'Login success!';
  }else{
    return exerciseNumber + ' ' + 'The password you entered is incorrect.';
  }
}

spacer();
console.log(login('test1234', 2));

/*
 * #3
 * Function - isGreaterThan
 * Create a function named `isGreaterThan` which will take two parameters: `first` and `second`
 *
 *  @param Datatype: Number `first`
 *  @param Datatype: Number `second`
 *  @return Datatype: Boolean
 *
 * The function will return true if the first number is greater than the second.
 * Console.log your result.
*/

function isGreaterThan(first, second, exerciseNumber){
  if (first > second){
    return exerciseNumber + ' ' + true;
  }else{
    return exerciseNumber + ' ' + false;
  }
}

spacer();
console.log(isGreaterThan(8, 5, 3));

/*
 * #4
 * Function - mustBeTrue
 * Create a function named `mustBeTrue` which will take a parameter: `boo`.
 *
 *  @param Datatype: Boolean `boo`
 *  @return Datatype: Boolean
 *
 * The function will return true if the value passed into the function is "true".
 * Console.log your result.
*/

function mustBeTrue(boo, exerciseNumber){
  if (boo === true){
    return exerciseNumber + ' ' + true;
  }else{
    return exerciseNumber + ' ' + false;
  }
}

spacer();
console.log(mustBeTrue(true, 4));

/*
 * #5
 * Function - bigBird
 * Create a function named `bigBird` which will take a parameter: `word`.
 *
 *  @param Datatype: String `word`
 *  @return Datatype: String
 *
 * The function will return the message "Word to Big Bird!", if the string passed into the function is a three-letter word. 
 * Console.log your result.
*/

function bigBird(word, exerciseNumber){
  if (word.length === 3){
    return exerciseNumber +  ' ' + 'Word to Big Bird!';
  }else{
    return exerciseNumber + ' ' + 'The word ' + '\'' + word + '\'' + ' is longer than three characters.';
  }
}

spacer();
console.log(bigBird('Big', 5));
console.log(bigBird('Bird', 5));

/*
 * #6
 * Function - isEqual
 * Create a function named `isEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are equal, the function will return the message "You look mahvelous!" Otherwise, return the message: "I don't know who you are anymore." 
 * Console.log your result.
*/

function isEqual(first, second, exerciseNumber){
  if (first === second){
    return exerciseNumber + ' ' + 'You look mahvelous!';
  }else{
    return exerciseNumber + ' ' + 'I don\'t know who you are anymore.';
  }
}

spacer();
console.log(isEqual('hi', 'hi', 6));
console.log(isEqual('hey', 'you', 6));

/*
 * #7
 * Function - notEqual
 * Create a function named `notEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are not equal, the function will return the message "Opposites do attract." Otherwise, return the message: "Cause it's like you're my mirror." 
 * Console.log your result.
*/

function notEqual(first, second, exerciseNumber){
  if (first !== second){
    return exerciseNumber + ' ' + 'Opposites do attract.';
  }else{
    return exerciseNumber + ' ' + 'Cause it\'s like you\'re my mirror.';
  }
}

spacer();
console.log(notEqual('yo', 'hi', 7));
console.log(notEqual('hey', 'hey', 7));

/*
 * #8
 * Function - spareChange
 * Create a function named `spareChange` which takes a parameter: `money`.
 *
 *  @param Datatype: Number `money`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is greater than 100, otherwise it will return false.
 * Console.log your result.
*/ 

function spareChange(money, exerciseNumber){
  if (money > 100){
    return exerciseNumber + ' ' + true;
  }else{
    return exerciseNumber + ' ' + false;
  }
}

spacer();
console.log(spareChange(100, 8));
console.log(spareChange(101, 8));

/*
 * #9
 * Function - dirty30
 * Create a function named `dirty30` which takes three parameters: `one`, `two` and `three`.
 *
 *  @param Datatype: Number `one`
 *  @param Datatype: Number `two`
 *  @param Datatype: Number `three`
 *  @return Datatype: Boolean
 *
 * The function will return true if the sum of all the number values is greater than 30, otherwise it will return false.
 * Console.log your result.
*/ 

function dirty30(one, two, three, exerciseNumber){
  if (one + two + three > 30){
    return exerciseNumber + ' ' + true;
  }else{
    return exerciseNumber + ' ' + false;
  }
}

spacer();
console.log(dirty30(10, 10, 10, 9));
console.log(dirty30(30, 30, 30, 9));

/*
 * #10
 * Function - evenStevens
 * Create a function named `evenStevens` which takes a parameter: `num`.
 *
 *  @param Datatype: Number `num`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed in is an even integer, otherwise it will return false.
 * Console.log your result.
*/ 

function evenStevens(num, exerciseNumber){
  if (num % 2 === 0){
    return exerciseNumber + ' ' + true;
  }else{
    return exerciseNumber + ' ' + false;
  }
}

spacer();
console.log(evenStevens(1000, 10));
console.log(evenStevens(1001, 10));

/*
 * #11
 * Function - daClub
 * Create a function named `daClub` which takes two parameters: `cover` and `age`.
 *
 *  @param Datatype: Number `cover`
 *  @param Datatype: Number `age`
 *  @return Datatype: String
 *
 * If BOTH values are 21 or over, the function will return the message: "Welcome to the Legends Lounge." Otherwise, it will return the message: "Chuck E Cheese is across the street."
 * Console.log your result.
*/ 

function daClub(cover, age, exerciseNumber){
  if ((cover >= 21) && (age >= 21)){
    return exerciseNumber + ' ' + 'Welcome to the Legends Lounge.';
  }else{
    return exerciseNumber + ' ' + 'Chuck E. Cheese is across the street.';
  }
}

spacer();
console.log(daClub(21, 21, 11));
console.log(daClub(21, 15, 11));
console.log(daClub(15, 15, 11));

/*
 * #12
 * Function - graduation
 * Create a function named `graduation` which takes two parameters: `credits` and `thesis`.
 *
 *  @param Datatype: Number `credit`
 *  @param Datatype: Boolean `thesis`
 *  @return Datatype: String
 *
 * If EITHER the number value is greater than or equal to 120 or the boolean value is true, then the function will return the message: "Congratulations on a job well done." Otherwise, return the message: "See you in summer school."
 * Console.log your result.
*/ 

function graduation(credits, thesis, exerciseNumber){
  if ((credits >= 120) || (thesis === true)){
    return exerciseNumber + ' ' + 'Congratulations on a job well done.'
  }else{
    return exerciseNumber + ' ' + 'See you in summer school.';
  }
}

spacer();
console.log(graduation(120, true, 12));
console.log(graduation(100, true, 12));
console.log(graduation(120, false, 12));

/*
 * #13
 * Function - moneyTrain
 * Create a function named `moneyTrain` which takes a parameter: `speed`.
 *
 *  @param Datatype: Number `speed`
 *  @return Datatype: String
 *
 * The function will return the message: "You are riding Honolulu's Rail.", if the number value is less than 50, otherwise it will return the message: "You are riding an Amtrak.", if the number value is less than 100, and return the message: "Now you ballin' in the Shinkansen!", if the number value is greater than or equal to 100.
 * Console.log your result.
*/ 

function moneyTrain(speed, exerciseNumber){
  if (speed < 50){
    return exerciseNumber + ' ' + 'You are riding Honolulu\'s Rail.';
  }else if (speed < 100){
    return exerciseNumber + ' ' + 'You are riding an Amtrak.';
  }else if (speed >= 100){
    return exerciseNumber + ' ' + 'Now you ballin\' in the Shinkansen!';
  }
}

spacer();
console.log(moneyTrain(10, 13));
console.log(moneyTrain(90, 13));
console.log(moneyTrain(150, 13));

/*
 * #14
 * Function - buyDoughnut
 * Declare a variable named `budget` and assign it with a number value that is greater than 20.
 * Declare a variable named `doughnutPrice` and assign it with a number value that is greater than 0 but less than 6.
 * Declare a variable named `doughnutBought` and assign it with a number value of 0.
 *
 * Create a function named `buyDoughnut` which takes NO parameters.
 * When the function is invoked, the budget will be decreased by the doughnutPrice and doughnutBought will increase by 1.
 * Console.log budget and doughnutBought.
 * Invoke your function again.
 * Console.log budget and doughnutBought again.
*/ 

var budget = 35;
var doughnutPrice = 4;
var doughnutBought = 0;

function buyDoughnut(exerciseNumber){
  budget -= doughnutPrice;
  doughnutBought++;
  return exerciseNumber + ' Budget is ' + budget + ' and doughnutBought is ' + doughnutBought;
}

spacer();
console.log(buyDoughnut(14));

/*Final Boss*/
/*Create a function name dailySpecials which takes in a parameter: `special`.
Inside the function, create a switch statement that will check the daily specials of your favorite restaurant (or make up your own daily specials for each day of the week.*/

var day;

function dailySpecials(special){
  switch(special){
    default:
      day = 'Sunday';
      return day;
    case 'Mac and cheese':
      day = 'Monday';
      return day;
    case 'Loaded ribs':
      day = 'Tuesday';
      return day;
    case 'Boneless wings':
      day = 'Wednesday';
      return day;
    case 'Orange chicken':
      day = 'Thursday';
      return day;
    case 'Spam and rice':
      day = 'Friday';
      return day;
    case 'Breakfast burrito':
      day = 'Saturday';
      return day;
  }
}

spacer();
console.log(dailySpecials('Orange chicken'));

/*
For loops - A for loop checks a condition a specific number of times and allows us to execute a code block and evaluate a condition to determine if our loop should run again.

The for loop is made up for 3 parts:

1) Initialization (i.e. var i = 0;)
2) Condition (i.e. i<arr.length;)
3) Update (i.e. i++)
*/

var toyotaModels = ["Corolla", "Prius", "4 Runner", "Camry", "Land Cruiser"];

spacer();

for (var i = 0; i<toyotaModels.length; i++){
   console.log("Toyota " + toyotaModels[i]);
}

/* 
 * #15
 * Create a for loop that will iterate 5 times and console.log the following:
 * "Player: 1"
 * "Player: 2"
 * "Player: 3"
 * "Player: 4"
 * "Player: 5"
*/

spacer();

for (var i = 1; i <= 5; i++){
  console.log('Player: ' + i);
}

/* 
 * #16
 * Create a for loop that will iterate and console.log each item in the array below:
*/

var myFavFoods = ["lemon bar", "carrot cake", "nachos", "bacon cheeseburger", "ramen", "sweet potato fries", "chimichanga"];

spacer();

for (var i = 0; i < myFavFoods.length; i++){
  console.log(myFavFoods[i]);
}

/*
 * #17
 * Function - sumItUp
 * Declare a variable named `numArray` and assign it with an array of 5 random numbers of your choice.
 * Declare a variable named `total` and assign it with a number value of 0.
 * 
 * Create a function named sumItUp which takes a parameter: `arr`.
 * 
 *   @param Datatype: Array `arr`
 *   @return Datatype: Number
 * 
 * The function will loop through and add up all the values in the array that is passed into the function and return the total.
 * Console.log your result.
*/

var numArray = [1, 11, 20, 8, 72]
var total = 0;

function sumItUp(arr, exerciseNumber){
  for (var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return exerciseNumber + ' ' + 'The sum is ' + total;
}

spacer();
console.log(sumItUp(numArray, 17));

/*
 * #18
 * Function - allStars
 * Create a function named `allStars` which takes a parameter: `ballers`.
 *
 *  @param Datatype: Array `ballers`
 *  @return Datatype: Array
 *
 * The function will loop through the players array and will put all the even number indexed players in the `east` array and the rest in the `west` array.
 * Console.log both the east and west arrays.
*/ 

var players = ["Yao Ming", "BrookLin", " Jesus Shuttlesworth", "Manute Bol", "Sidney Deane", "World B Free"];
var east = [];
var west = [];

function allStars(ballers, exerciseNumber){
  for (var i = 0; i < ballers.length; i++){
    if (i % 2 === 0){
      east.push(ballers[i]);
    }else{
      west.push(ballers[i]);
    }
  }
  return exerciseNumber + ' East array: ' + east + ' West array: ' + west;
}

spacer();
console.log(allStars(players, 18));

/*
 * #19
 * Function - subways
 * Create a function named `subways` which takes a parameter: `special`.
 *
 *  @param Datatype: Array `special`
 *  @return Datatype: Array
 *
 * The function will loop through the array value and replace all the odd numbered indexed items with "Classic Tuna".
 * Console.log your results.
*/ 

  var subOftheDay = ["Teriyaki Chicken", "Spicy Italian", "Turkey", "BMT", "Black Forest Ham", "Meatball Marinara", "Veggie"];


/*
Final Boss
 * #20
 * Function - removeLetter
 * Create a function named `removeLetter`, which takes a parameter `str`. 
 *
 *   @param Datatype: String `str`
 *   @return Datatype: Array
 *
 *  The function will loop through the string value and put all the letters into an array, except for the letter "A" and "a". We don't want no stinking "A" or "a" in our array. Test your function with the `phrase` below!
*/

var phrase = "An apple a day keeps Alice feeling awesome!";
 
  
  










