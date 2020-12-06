var readlineSync = require('readline-sync');
var chalk=require('chalk');
var name =readlineSync.question("What is your name?")
console.log("Welcome "+name);
var birthdate=readlineSync.question("Enter your birthdate in DD/MM format" );
var split=birthdate.split('/');
var strng1=split[0]
var date=parseInt(strng1,10)
if(isNaN(date)){
  console.log("enter valid date")
}
if(date<=0 || date>31){
  console.log("please enter valid date")
}
var strng2=split[1]
var month=parseInt(strng2,10)
if(isNaN(month)){
  console.log("enter valid month")
}

if(month<=0||month>12)
{
  console.log("enter valid month")
}
if(month==4|| month==6||month==9||month==11 ){
  if(date==31){
    console.log("Enter a valid month")
  }
}
if(month==2){
   if(date==30||31)

  console.log("enter valid date ")
}
var rem=0;
var number = month+date;
for(var i=2;i<number;i++){
  var rem=number%i;
  }
  if(rem==0){
    console.log("Birthdate is not a prime number; ")}
    else{
      console.log("Birthdate is a prime number");
    }

