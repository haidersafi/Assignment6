const { summarizers } = require("istanbul-lib-report");

//Chapter21-25 Task1//
var firstName=prompt("Enter Your First Name:");
var secondName=prompt("Enter Second Name");
alert("Welcome! " +(firstName+" "+secondName));

//Chapter21-25 Task2//

var favcell=prompt("Enter Your Favourite Mobile Phone:");
document.write("String Length is: "+favcell.length);

//Chapter21-25 Task3//

var country="pakistani";
for (let i=0;i<country.length;i++){
    if (country[i]==='n'){
        document.write("<br>Index of 'n': "+i);
    }
}

//Chapter21-25 Task4//
var hello="Hello World";
document.write("<br>Last index of 'l' is "+(hello.lastIndexOf('l')))
var country="pakistani";
//Chapter21-25 Task5//
var country="pakistani";
for (let i=0;i<country.length;i++){
    if (i===3){
        document.write("<br>character at index 3 : "+country[3]);
    }
}
//Chapter21-25 Task6//
var firstName=prompt("Enter Your First Name:");
var secondName=prompt("Enter Second Name");
alert("Welcome! " +(firstName.concat(" ",secondName)));
//Chapter21-25 Task7//
var city='Hyderabad';

document.write("<br>City: "+city+"<br>After Replacment: "+(city.replace("Hyderabad","Islamabad")));
//Chapter21-25 Task8//
var message='Ali and Sami are best friends.They play cricket and football together.';
var message1=message.replace(/and/g,"&");
document.write("<br>"+message1);
//Chapter21-25 Task9//
var strValue="472";
var numValue=Number(strValue);
document.write("<br>Value: "+strValue+"<br>Type: "+(typeof strValue)+"<br>Value: "+numValue+"<br>Type: "+(typeof numValue))
//Chapter21-25 Task10//
var userInput="peanuts";
document.write("<br>User Input: "+userInput+"<br>Upper Case: "+userInput.toUpperCase());
//Chapter21-25 Task11//
var userInput="javascript";
document.write("<br>User Input: "+userInput+"<br>Title Case: "+(userInput.charAt(0).toUpperCase()+userInput.slice(1)));
//Chapter21-25 Task12//
var num=35.36;
var str=num.toString();
document.write("<br>Number: "+str+"<br>Result: "+(str.replace(".","")))
//Chapter21-25 Task13//
var name=prompt("USERNAME:");
for (let i=0;i<name.length;i++){
var asciiCode=name.charCodeAt(i);
if (asciiCode===33||asciiCode===44||asciiCode===46||asciiCode===64)
{
alert("ENTER A VALID NAME")
break;}
}

//Chapter21-25 Task14//
var a=['cake', 'applepie','cookie','chips','patties'];
var input=prompt("Search Here :");
if (a.includes(input.toLowerCase())){
alert(input+" is in the list at index: "+(a.indexOf(input)))}
else{alert(input+" is not in the list")}

//Chapter21-25 Task15//
var pass=prompt("Enter Password:");
if(pass.length>5){
    if(pass.charCodeAt(0)>47&&pass.charCodeAt(0)<58){
        alert("Entered Password: "+pass+"\nPassword can not start with a number\nPleast enter a valid password");
    }
    else{
        for (let i=0;i<pass.length;i++){
            var ascii=pass.charCodeAt(i);
            if  (!(ascii>47&&ascii<58||ascii>64&&ascii<91||ascii>96&&ascii<123)){
                alert("Entered Password: "+pass+"\nPassword must be only numbers and strings\nPleast enter a valid password");    
            }
        }
    }
}
else{
    alert("Entered Password: "+pass+"\nPassword must be atleast six character\nPleast enter a valid password");
}

//Chapter21-25 Task16//
var university='University of Karachi';
for (let i=0;i<university.length;i++){
    document.write(university[i]+"<br>")}
//Chapter21-25 Task17//
var userInput=prompt("Enter Something: ");
alert("User Input: "+userInput+"\nLast character of input: "+userInput[userInput.length-1]);
//Chapter21-25 Task18//
var str='the quick brown fox jumps over the lazy dog';
var count=str.match(/the/g)||[].length;
(count>0)?alert('Text: '+str+"\nThere are "+count+" occurence(s) of the word 'the'"):(alert("'the' doesnot exist "))
//Chapter26-30 Task1//
var inputNum=Number(prompt('Enter Any Positive No. :'));
if (inputNum<0){
    alert("Please Enter a Positive No.");
}
else{
    document.write("Number:"+inputNum+"<br>Round of value of the number:"+Math.round(inputNum)+"<br>Floor value: "+Math.floor(inputNum)+"<br>Ceil value: "+Math.ceil(inputNum))
}
//Chapter26-30 Task2//
var inputNum=Number(prompt('Enter Any Negative No. :'));
if (inputNum>0){
    alert("Please Enter a Negative No.");
}
else{
    document.write("Number:"+inputNum+"<br>Round of value of the number:"+Math.round(inputNum)+"<br>Floor value: "+Math.floor(inputNum)+"<br>Ceil value: "+Math.ceil(inputNum))
}
//Chapter26-30 Task3//
var no=prompt("Enter Any No. :");
alert("\n Absolute Value of No. :"+(math.abs(no)))
//Chapter26-30 Task4//
document.write("<br>Random Dice Value: "+(Math.floor(Math.random()*21)))
document.write("<br>Random Dice Value: "+(Math.floor(Math.random()*21)))
//Chapter26-30 Task5//
var randomCoinValue=Math.floor(Math.random() * (1 + 2 - 1)) + 1;
document.write("<br>"+randomCoinValue);
if(randomCoinValue===2){document.write("<br>random coin value: Heads")}
else{document.write("<br>random coin value: Tails")} 
//Chapter26-30 Task6//

var randomNumber=Math.floor(Math.random() * (1 + 100 - 1)) + 1;
document.write("<br>Random Number between 1 and 100 is "+randomNumber)

//Chapter26-30 Task7//
var weight=prompt("Enter Your Weight in Kilograms: ");
var match=weight.match(/\d+/g);
alert("The weight of user is "+(match.toString()).replace(",",".")+" kilograms");

//Chapter26-30 Task8//
var randomNumberGuess=Math.floor(Math.random() * (1 + 10 - 1)) + 1;
var number1=Number(prompt("Enter Any Number Between 1 and 10"));
if (number1===randomNumberGuess){
    alert("Congratulations")
}
else{alert("Try Again")}
//Chapter31-34 Task1//

var d = new Date();
document.write(d)
//Chapter31-34 Task2//
var d = new Date();
var month=new Array(12);
month[0] = "January";
month[1] = "Feburary";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10]= "November";
month[11]= "December";
var monthCurrent=month[d.getMonth()];
alert("Current Month: "+monthCurrent)

//Chapter31-34 Task3//

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
var day = weekday[d.getDay()];
alert("Today is "+day);

//Chapter31-34 Task4//
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
var day = weekday[d.getDay()];
if (day==="Sun"||day==="Sat"){
    alert("Its Fun Day");
}

//Chapter31-34 Task5//
var d = new Date();
var currentDate=d.getDate();
if (currentDate<16){alert("First Fifteen Days of Month")}
else{alert("Last Fifteen Days of Month")}
//Chapter31-34 Task6//
var d=new Date();
var dateTime1=d.getTime();
var dateTime2=new Date("01/01/1970");
var timeDiffInMilli = Math.abs(dateTime2.getTime() - dateTime1);
  var timeDiffInMinutes = Math.floor(timeDiffInMilli / 60000);
  
alert("Current Date:"+d+"\nElapsed milliseconds since januray 1 ,1970: "+timeDiffInMilli+"\nElapsed Minutes since januray 1,1970: "+timeDiffInMinutes );
//Chapter31-34 Task7//
var d=new Date();
if (d.getHours>12&&<24){alert("its PM")}
else{alert("its AM")}
//Chapter31-34 Task8//
var laterDate = new Date(2020, 11, 31, 00, 00, 00, 00);

//Chapter31-34 Task9//
var currentDate= new Date();
var ramadanDate=new Date(2015,06,15);

var dateDiff=Math.floor((currentDate.getTime()-ramadanDate.getTime())/(1000*3600*24));
alert(dateDiff+" has passed since 1st Ramadan,2015");

//Chapter31-34 Task10//
var refDate= new Date(1020,06,21);
var begDate=new Date(2015,00,00);
var secDiff=Math.abs(refDate.getTime()-begDate.getTime()/1000);
document.write("<br> On reffernce date :"+refDate+"<br>"+secDiff+" seconds had passed since beginning of 2015");
//Chapter31-34 Task11//
var currentDate=new Date();
document.write("Current Date: "+currentDate);
currentDate.setHours(currentDate.getHours()-1);
document.write("<br>1 hour ago it was :"+currentDate);
//Chapter31-34 Task12//
var currentDate=new Date();
document.write("Current Date: "+currentDate);
currentDate.setFullYear(currentDate.getFullYear()()-100);
document.write("<br>100 years back it was :"+currentDate);
//Chapter31-34 Task13//
var currentYear=new Date().getFullYear();
var birthYear=new Date(1993,01,00).getFullYear();
document.write("Your Age is "+(currentYear-birthYear)+"<br>Your birth year is "+birthYear);
//Chapter31-34 Task14//
var units=410;
var chargeperunit=16;
var latePaymentSurcharge=350;
var netAmount=Math.round((units*chargeperunit) * 100 + Number.EPSILON ) / 100;
document.write("<br><h2>K-Electric Bill</h2>");
document.write("<br>Customer Name: ABC customer");
document.write("<br>Current Month: June");
document.write("<br>Number of Units: 410");
document.write("<br>Charges per Unit: 16");
document.write("<br>Net Amount payble within due date: "+netAmount)
document.write("<br>Gross Amount Payable(After Due Date):"+(Math.round( (netAmount+latePaymentSurcharge) * 100 + Number.EPSILON ) / 100));
//Chapter31-35 Task1//
function CurrentDate(){
var d = new Date();
document.write(d)
}
CurrentDate();
//Chapter31-35 Task2//
function Greet(fname,lname){
    alert("Welcome "+(fname+" "+lname))
}
Greet('safi','saqlain')

//Chapter31-35 Task3//
var fno=Number(prompt("<br>Enter Any No.:"));
var Sno=Number(prompt("<br>Enter any Second No.:"));
function Sum(a,b){
    return a+b;
}
alert("Sum of "+fno+" and "+Sno+" is "+Sum(fno,Sno));
//Chapter31-35 Task4//

function Calculator(a,b,c){
    if (c==='+'){alert("Sum of "+a+" and "+b+" is "+(a+b))}
    else if(c==='-'){document.write("Sub of "+a+" and "+b+" is "+(a-b))}
    else if(c==='*'){document.write("Multiplication of "+a+" and "+b+" is "+(a*b))}
    else if(c==='/'){document.write("Division of "+a+" and "+b+" is"+(a/b))}
    else if(c==='%'){document.write("Remainder of "+a+" and"+b+" is"+(a%b))}
    else {document.write("wrong operator")}

}
Calculator(1,2,'+');

//Chapter31-35 Task5//
function sqr(a){
    return a*a;
}
sqr(2);
//Chapter31-35 Task6//

function factorial(a){

    for(let i=a-1;i>=1;i--){
        a=a*i
    }
    return a;
}

factorial(5);
//Chapter31-35 Task7//
function counting(a,b){
    for (let i=a;i<=b;i++){
        document.write("<br>"+i)
    }
}

//Chapter31-35 Task8//
function hypotenuse(a,b){
function sqr(c){
return c*c
}
return sqr(a)+sqr(b);
}
//Chapter31-35 Task9//
function areaofrectangle(a,b){
return a*b;
}
areaofrectangle(2,4);
var c=5,d=7;
areaofrectangle(c,d);

//Chapter31-35 Task10//
function palindrome(str){
var revstr=""
for (let i=str.length-1;i>=0;i--){
revstr=revstr+str[i];
}
if (revstr===str){alert(str+' is a palindrome')}
else{alert(str+' is not a palindrome')}
}
palindrome("civic");

//Chapter31-35 Task11//
   function titleCase(string) {
      var sentence = string.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
   document.write("<br>input: "+string+"<br>Ouput: "+sentence.join(" "));
   return sentence;
   }
   titleCase("the quick brown fox");
//Chapter31-35 Task12//
   function longestString(string){
       var sentence=string.split("");
       var longest='';
       var num=0;
       for (let i=0;i<sentence.length;i++){
       if (sentence[i].length>num){
       num=sentence[i].length;
       longest=sentence[i]}
       }

       alert("String: "+string+"\nOutput: "+longest);

   }
   longestString("web development tutorial")
//Chapter31-35 Task13//
var string="JSResourceS.com";
function letterMaching(string,letter){
    var count=string.split("").filter(ch=>ch==letter).length;
(count>0)?(alert("'"+letter+"' exists "+count+" time(s) in this string")):(alert("'"+letter+"' doesnot exist"))
}
letterMaching(string,'o');

//Chapter31-35 Task14//
function calcCircumference(r){
    alert("The Circumference is "+(2*3.142*r))
    }
    
    function calcArea(r){
    alert("The Area "+(3.142*(r*r)))}

    calcCircumference(2);
    calcArea(5);