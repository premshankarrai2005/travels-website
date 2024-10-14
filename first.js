// 1.problem if else statement

/*let a=prompt("what's your age?")
a=Number.parseInt(a)
if(a<0){
    alert("this is a invalid age.")
}
else if(a>0 && a<9){
    alert("you are a kid and you can not think about driving.")
}
else if(a>9 && a<18){
    alert("you are a kid and you can  think about driving.")
}
else{
    alert("your age is more than 18 as your wish you can drive.")
}*/

// 2.switch case  statement 

/*const exprs='payasam';
switch (exprs) {
    case 'orange':
        console.log("the price of the orange is 2.32pound.");
        break;
    case 'mango':
    case 'payasam':
        console.log("the price of the mango and payasam is 3.56 pound.");
        break;
    default:
        console.log('sorry,we unable to identify.');
        break;
}*/


// 3.number is even or odd

/*let a=prompt("enter the number=")
a=Number.parseInt(a)
if (a%2==0){
    console.log("Nuber is even")
}
else{
    console.log("Number is odd")
}*/


// 4.you can drive or not using turnary operator
/*let age=20
let a=age>19? "you can drive." :"you can't drive."
console.log(a)*/


//  loop concept

/*sum=0;
let n=prompt("Enter the valve of n");
n=Number.parseInt(n);
for(let i=0;i<n;i++){
  sum+=(i+1)
}
console.log("sum of first" +n+ "number is " +sum)*/


// for in 

/*let obj={
    ram:45,
    "shyam":74,
    "sivam":93,
    "geeta":95
}
for (let a in obj){
    console.log("marks of "+a+" is "+obj[a])
}*/


//while loop

/*let n=prompt("enter the value of n")
n=Number.parseInt(n);
i=0;
while(i<n){
    console.log(i);
    i++;
}*/


//do-while loop

/*let n=prompt("enter the value of n")
n=Number.parseInt(n);
i=0;
do{
    console.log(i);
    i++;
}while(i<n);*/



//   chapter:- 3 practice set

//  1.problem
/*const obj={
    ram:12,
    shyam:87,
    mohan:65,
}
for(let a in obj){
    console.log("marks of "+a+ " is "+obj[a])
}*/

//  2.problem

/*let cn=25;
let i
while(i!=cn){
    i=prompt("try again.")
}
console.log("entered number is correct.")*/

//3.problem

/*const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(3,4,5,6))*/


// ############### STRING ###################

// 1.problem:-write a program to print a character of string using for loop

/*let a="prem";
for(i=0;i<a.length;i++){
    console.log(a[i]);
}*/


//string practiceset

// 1.problem

/*let str="har\""
console.log(str.length)*/

//2.problem

/*const sentence="fox is very dangerous amimal in forest"
const word="fox2"
console.log(sentence.includes(word))
console.log(`the word "${word}" ${sentence.includes(word) ?  ' is ':' is not '} in the sentence` );*/

//3.problem

/*let str="ramu";
console.log(str.toUpperCase());*/

//4.problem

/*let sentence="please give me 1000"
//let word=sentence.slice("please give me ".length)
    //or
let word=sentence.slice(15)    
console.log(word)*/

//5.problem

/*let name="archana"
name[4]="m"
console.log(name) //it is not change because string is immutable*/


// for loop

/*let student_marks=[45,87,98,90,76,"harri"]

for(let i=0;i<student_marks.length;i++){
console.log(student_marks[i])
}
console.log(student_marks.length)*/

//######### Array #################

/*let num=[12,34,52,13,432,213,21]
num.sort()
console.log(num)*/ //this is sorting on the basis of first digit like 1,2,3 this is not in asscending order
 

//for ascending order

/*let num=[12,34,52,432,213,21];
const compare=(a,b)=>{
    return a-b
}
let asce=num.sort(compare)
console.log(asce)*/

//  for descending order

/*let num=[12,34,52,432,213,21];
const compare=(a,b)=>{
    return b-a
}
let asce=num.sort(compare)
console.log(asce)*/
  

/*const prem={
    prem:99,
    fkdfjs:90,
    jiopke:98
}
for(let a in prem){
    console.log("value of " +a+' is ' +prem[a] )
}*/


//  Map

/*let age=[23,45,67,89,34];
let increments=age.map((value,index,age)=>{
    console.log(value,index,age);
     return value +2 //or index
});
console.log(increments);*/


//reduce

/*let marks=[96,65,97,89,95];
let aftercheck=marks.reduce((a,b)=>{
    return a+b
});
console.log(aftercheck)*/


//Array practice

// problem 1

/*let arr=[1,23,4,56,88,44]
let newdigit=prompt("Enter the new the element")
newdigit=Number.parseInt(newdigit)
arr.push(newdigit);
console.log(arr)*/

//problem 2
 /*let arr=[2,3,4,5,67]
 let newdigit;
 do{
    newdigit=prompt("enter the new digit")
    newdigit=Number.parseInt(newdigit)
    arr.push(newdigit)
    
 }while(newdigit!=0)//we are using do while because it also print that value
    console.log(arr)*/

//Problem 3

/*let ar=[34,57,87,34,10,20,30,40]
let newarr=ar.filter((a)=>{
    return a%10==0
})
console.log(newarr)*/

//problem 4

/*let prem=[2,3,4,5,6]
let newarr=prem.map((x)=>{
    return x*x
})
console.log(newarr)*/

//problem 5

/*let fact=[1,2,3,4,5]
let newfact=fact.reduce((x,y)=>{
    return x*y
})
console.log(newfact)*/


// ########### GAME ########

//create a program for random search between 1 to 100
/*let a=Math.random()*100
a=Number.parseInt(a);
let inp;
let score=100;
while(inp!=a){
    score=score-1;
    inp=prompt("Enter the actual number between 1 to 100");
    if(inp==a){
        console.log("Congratulation you won the game")
        console.log(`guess the actual number in ${100-score} chances.`)
    }
    else if(inp>a && inp<100){
        console.log("your number is greater than the number.")
    }
    else if(inp<a && inp>0){
        console.log("your number is smaller  than the number.")
    }
    else{
        console.log("Enter the number between 1 to 100")
    }
}*/

// chapter 6 solution

//1.Solution

 /*let age=prompt("Enter your age")
 age=Number.parseInt(age)
 if(age>18){
    alert("you can drive");
 }
 else{
    alert("you cannot drive")
 }*/

         //or

/*let age=prompt("Enter your age")
age=Number.parseInt(age)
const canDrive=(age)=>{
    return age>=18?true:false
}
if(canDrive(age)){
    alert("you can drive.")
}
else{
    alert("you can't drive.")
}*/

//2.Solution

/*let runAgain=true;
const canDrive=(age)=>{
    return age>=18?true:false
}
while(runAgain){
    let age=prompt("Enter your age")
    age=Number.parseInt(age)

    
    if(canDrive(age)){
        alert("you can drive")
    }
    else{
        alert("you can't drive")
    }
    runAgain=confirm("Do you want to play again?")
}*/
    
//3.Solution

/*let runAgain=true;
const canDrive=(age)=>{
    return age>=18?true:false
}
while(runAgain){
    let age=prompt("Enter your age")
    age=Number.parseInt(age)

    if(age<0){
    console.error("Please enter the valid age");
    break;
    }


    if(canDrive(age)){
        alert("you can drive")
    }
    else{
        alert("you can't drive")
    }
    runAgain=confirm("Do you want to play again?")
}*/

//4.Solution

/*let number=prompt("Enter the number")
number=Number.parseInt(number)
if(number>4){
    location.href="https://google.com"
}*/

//5.Solution

/*let color=prompt("Enter the page background color.")
document.body.style.background=color*/


// Function to get the computer's choice
/*function getComputerChoice() {
    const choices = ['S', 'W', 'G'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    if (
        (userChoice === 'S' && computerChoice === 'W') ||
        (userChoice === 'W' && computerChoice === 'G') ||
        (userChoice === 'G' && computerChoice === 'S')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

// Main function to play the game
function playGame() {
    const userChoice = prompt('Enter S for Snake, W for Water, or G for Gun:').toUpperCase();
    const validChoices = ['S', 'W', 'G'];

    if (!validChoices.includes(userChoice)) {
        alert('Invalid choice! Please enter S, W, or G.');
        return;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}\n${result}`);
}

// Start the game
playGame();*/

// Function to get the computer's choice
// function getComputerChoice() {
//     const choices = ['S', 'W', 'G'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// Function to determine the winner
// function determineWinner(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         return 'tie';
//     }

//     if (
//         (userChoice === 'S' && computerChoice === 'W') ||
//         (userChoice === 'W' && computerChoice === 'G') ||
//         (userChoice === 'G' && computerChoice === 'S')
//     ) {
//         return 'user';
//     } else {
//         return 'computer';
//     }
// }

// Main function to play the game
// function playGame() {
//     let userWins = 0;
//     let computerWins = 0;
//     const rounds = 10;

//     for (let i = 0; i < rounds; i++) {
//         const userChoice = prompt('Enter S for Snake, W for Water, or G for Gun:').toUpperCase();
//         const validChoices = ['S', 'W', 'G'];

//         if (!validChoices.includes(userChoice)) {
//             alert('Invalid choice! Please enter S, W, or G.');
//             i--; // Repeat this round
//             continue;
//         }

//         const computerChoice = getComputerChoice();
//         const result = determineWinner(userChoice, computerChoice);

//         if (result === 'user') {
//             userWins++;
    //         alert(`Round ${i + 1}: You chose: ${userChoice}\nComputer chose: ${computerChoice}\nYou win this round!`);
    //     } else if (result === 'computer') {
    //         computerWins++;
    //         alert(`Round ${i + 1}: You chose: ${userChoice}\nComputer chose: ${computerChoice}\nComputer wins this round!`);
    //     } else {
    //         alert(`Round ${i + 1}: You chose: ${userChoice}\nComputer chose: ${computerChoice}\nIt's a tie!`);
    //     }
    // }

    // // Declare the overall winner
//     let finalResult;
//     if (userWins > computerWins) {
//         finalResult = 'You are the overall winner!';
//     } else if (computerWins > userWins) {
        // finalResult = 'Computer is the overall winner!';
//     } else {
//         finalResult = 'The game is a tie!';
//     }

//     alert(`Final Score:\nYou: ${userWins}\nComputer: ${computerWins}\n${finalResult}`);
// }

// // Start the game
// playGame();



// led bulb glow and off
setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb")
},3000);




    