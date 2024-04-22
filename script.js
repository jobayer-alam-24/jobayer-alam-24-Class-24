function startCheck(){
    // Problem 1:
(function tempCheck(){
    let tempCel = prompt("Current temperature in Celsius: ");
   
    if(tempCel <= 0){
       console.log("Freezing"); 
    }
    else if(tempCel > 0 && tempCel <= 10){
        console.log("Cold");
    }
    else if(tempCel > 10 && tempCel <= 20){
        console.log("Moderate");
    }
    else if(tempCel > 20){
        console.log("Hot");
    }
    else{
        console.log("Invalid input!")
    }
})();

// Problem 2:
(function gradeCalculator(){
    let mark = prompt("What is your total mark? ");
    
    if(mark < 0 || mark > 100 || isNaN(mark)){
        console.log("Invalid Input")
    }
    else if(mark >= 90 && mark <= 100){
        console.log("A+");
    }
    else if(mark >= 80 && mark <= 89){
        console.log("B");
    }
    else if(mark >= 70 && mark <= 79){
        console.log("C");
    }
    else if(mark >= 60 && mark <= 69){
        console.log("D");
    }
    else if(mark < 60){
        console.log("F");
    }
})();

// problem 3:
(function dayofWeek(){
    const day = new Date().getDay();
    switch(day){
        case 1:
            console.log("Today is" + " Sunday");
            break;
        case 2:
            console.log("Today is" + " Monday");
            break;
        case 3:
            console.log("Today is " + "Tuesday");
            break;
        case 4:
            console.log("Today is" + " Wednesday");
            break;
        case 5:
            console.log("Today is " + "Thursday");
            break;
        case 6:
            console.log("Today is" + " Friday");
            break;
        case 7:
            console.log("Today is" + " Saturday");
            break;
        default:
            console.log("Invalid input!") //There is no need here.
    }
})();

// problem 4:
(function numberCompare(){
    let num1 = prompt("Enter the first number: ");
    let num2 = prompt("Enter the seconod number: ");
    if(num1 > num2){
        console.log(num1 + " is greater than " + num2);
    }
    else if(num1 < num2){
        console.log(num1 + " is less than " + num2);
    }
    else{
        console.log(num1 + " is eaual to " + num2);
    }
})();

// problem 5:
(function monthCheck(){
    const month = new Date().getMonth();

    switch(month){
        case 0:
            console.log("January");
            break;
        case 1:
            console.log("February");
            break;
        case 2:
            console.log("March");
            break;
        case 3:
            console.log("April");
            break;
        case 4:
            console.log("May");
            break;
        case 5:
            console.log("June");
            break;
        case 6:
            console.log("July");
            break;
        case 7:
            console.log("August");
            break;
        case 8:
            console.log("September");
            break;
        case 9:
            console.log("October");
            break;
        case 10:
            console.log("November");
            break;
        case 11:
            console.log("December");
            break;
    }
})();

// problem 6: 
(function ticketCounter(){
    let age = prompt("Enter your age: ");

    if(age < 0 || isNaN(age)){
        console.log("Invalid input!")
    }
    else if(age <= 12){
        console.log("Pay $5");
    }
    else if(age <= 13 && age >= 17){
        console.log("Pay $8");
    }
    else if(age <= 18 && age >= 64){
        console.log("Pay $10");
    }
    else if(age >= 100){
        console.log("You don't have enough age to watch movie!");
    }
    else(
        console.log("Pay $7")
    )
})();

// problem 7: 
(function trafficSignal(){
    let color = prompt("What is the color(Green, Yellow, Red): ");
    let caseCheck = color.toLowerCase();
    
    switch(caseCheck){
        case "green":
            console.log("Proceed");
            break;
        case "yellow":
            console.log("Slow down");
            break;
        case "red":
            console.log("Stop!");
            break;
        default:
            console.log("Invalid Color name!");
    }
})();
}