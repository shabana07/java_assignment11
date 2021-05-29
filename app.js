// CHAPTER 17-20


// Q:1 
// var multiArrays = [[],[],[]]

// Q:2  
// var multiArrays = [
//                     [0, 1, 2, 3],
//                     [1, 0, 1, 2],
//                     [2, 1, 0, 1]
//                 ]

// document.write("<h2><u>Multidimensional Array</u></h2>")
// for(var i = 0; i <= 2; i++){
//     for(var j = 0; j <= 3; j++){
//     document.write(multiArrays[i][j])
//     }
//     document.write("<br/>")
// }

// Q:3 

// document.write("<h2><u>Numeric Counting from 1 to 10</u></h2>");
// for(var i = 1; i <= 10; i++){
//     document.write(i +"<br/>")
// }

// Q:4 

// var a = prompt("Enter a Number to show its multiplication table");
// var b = prompt("Enter length multiplication table");
// document.write("<h2>Multiplication table of "+a+" Length of "+b +"<br/><br/></h2>");
// for(var i = 1; i <= b; i++){
//     document.write(  a+" X " + i+" = "+a*i+"<br/>");
// }

// Q:5 
// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

// for(var i = 0; i < fruits.length; i++){

//     document.write(fruits[i]+"</br>");

// }
//     document.write('</br></br>Element at index ' +fruits.indexOf('apple')+ ' is ' +' apple'+"</br>");
//     document.write('Element at index ' +fruits.indexOf('banana')+ ' is ' +' banana'+"</br>");
//     document.write('Element at index ' +fruits.indexOf('mango')+ ' is ' +' mango'+"</br>");
//     document.write('Element at index ' +fruits.indexOf('orange')+ ' is ' +' orange'+"</br>");
//     document.write('Element at index ' +fruits.indexOf('strawberry')+ ' is ' +' strawberry'+"</br>");

// Q:6

// var counting = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// document.write("<h2>Counting :</h2>"+counting);
// var a = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var b = a.reverse();
// document.write("<h2>Reverse counting :</h2>"+b);

// document.write("<h2>Even :</h2>");
// for( var i = 0; i <= 20; i=i+2){
//     document.write(i+", ")
// }

// document.write("<h2>Odd :</h2>");
// for( var i = 1; i <= 20; i=i+2){
//     document.write(i+", ")
// }

// document.write("<h2>Series :</h2>");
// for( var i = 2; i <= 20; i=i+2){
//     document.write(i+"k, ")
// }

// Q: 7 

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order =prompt("Enter your name :");

// for(var i = 0; i < items.length; i++){
//     var a = items.indexOf(order);
//   if (order == "cake" ) {
//     document.write(order+ " is available at index " +a+"  in our bakery")
//     break;
//   }
//   else if (order == "apple pie" ) {
//     document.write(order+ " is available at index " +a+"  in our bakery")
//     break;
//   }
//   else if (order == "cookie" ) {
//     document.write(order+ " is available at index " +a+"  in our bakery")
//     break;
//   }
//   else if (order == "chips" ) {
//     document.write(order+ " is available at index " +a+"  in our bakery")
//     break;
//   }
//   else if (order == "patties" ) {
//     document.write(order+ " is available at index " +a+"  in our bakery")
//     break;
//   }else{
//     document.write("We are sorry "+order+ " is not avaialble in our bakery")
//     break;
// }
// }


// Q:8 & Q:9

// var num = [24, 53, 78, 91, 12];
// var a = Math.max(24, 53, 78, 91, 12);
// document.write("Array items : "+num+"<br/>"+"The largest number is "+a);
// var b = Math.min(24, 53, 78, 91, 12);
// document.write("<br/><br/><br/>"+"Array items : "+num+"<br/>"+"The smallest number is "+b);


// Q:10

// var num = 5;
// for(var i = 1; i <=20; i++){
//     document.write(num*i+", ")
// }

// CHAPTER 17-20

// Q:1 

// var firstName = prompt("Enter your first name : ");
// var lastName = prompt("Enter your last name : ");
// document.write(firstName+" "+lastName)

// Q:2 

// var input = prompt("Enter your favorite mobile phone model :");
// var a = input.length;
// document.write("My favourite phone is : "+input+"<br/>"+"Length of string : "+a);

// Q:3 

// var str = "Pakistan";
// var a = str.indexOf("n");
// document.write("String: "+str+"<br/>"+"Index of 'n':"+a);

// Q:4  

// var  str = "Hello World";
// var a = str.lastIndexOf("l");
// document.write("String: "+str+"<br/>"+"Index of 'n': "+a);

// Q:5 

// var str = "Pakistani";
// var a = str.charAt(3);
// document.write("String: "+str+"<br/>"+"Character at index 3: "+a);

// Q:6 

// var firstName = prompt("Enter your first name : ");
// var lastName = prompt("Enter your last name : ");
// var a = firstName.concat( lastName);
// document.write(a)

// Q:7

// var city = "Hyderabad";
// var a = city.replace("Hyderabad","Islamabad");
// document.write("City: "+city+"<br/>"+"After replacement: "+a);

// Q:8 

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var a = message.replace(/and/g,"&");
// document.write(a)

// Q:9 

// var str = "472";
// var a = typeof(str);
// var num = parseInt(str);
// var b = typeof(num);
// document.write("Value: "+str+"<br/>"+"Type: "+a+"<br/>"+"Value: "+num+"<br/>"+"Type: "+b)

// Q:10

// var input = prompt("Enter value:");
// var a = input.toUpperCase();
// document.write("User input: "+input+"<br/>" +"Upper case: "+a)

// Q:11

// var input = prompt("Enter value :");
// var firstChar = input.slice(0,1);
// var a= firstChar.toUpperCase();
// var otherChar = input.slice(1);
// var b = otherChar.toLowerCase();
// document.write(a+b)

// Q:12

// var a = 35.36;
// var b = a.toString();
// var x= b.slice(0,2);
// var y = b.slice(3,5);
// document.write("Number : " +a);
// document.write("<br/>Result : " +x+y);

// Q:13

// var userName =prompt("Enter your name :");
// var user = userName.split("");
// for(var i = 0; i < user.length; i++){
//   if (user[i] == "!" || user[i] == "," || user[i] == "." || user[i] == "@") {
//     alert("please enter avalid username");
//   }
// }

// Q: 14 

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order =prompt("Enter your name :");
// order.toLowerCase();

// for(var i = 0; i < items.length; i++){
//     var a = items.indexOf(order);
//   if (order == "cake" ) {
//     document.write(order+ " is available at index " +a+"  in our bakery")
//     break;
//   }
//   else if (order == "apple pie" ) {
//     document.write(order+ " is available at index " +a+"  in our bakery")
//     break;
//   }
//   else if (order == "cookie" ) {
//     document.write(order+ " is available at index " +a+"  in our bakery")
//     break;
//   }
//   else if (order == "chips" ) {
//     document.write(order+ " is available at index " +a+"  in our bakery")
//     break;
//   }
//   else if (order == "patties" ) {
//     document.write(order+ " is available at index " +a+"  in our bakery")
//     break;
//   }else{
//     document.write("We are sorry "+order+ " is not avaialble in our bakery")
//     break;
// }
// }


// Q:15

// var password = prompt("Enter password: ");
// var n = password.charCodeAt(0);


// if(n >= 48 && n <= 57){
//     document.write("Entered password: "+password+"<br/>");
//     document.write("Password can not begin with a number");
//     document.write("<br/>"+"Please Enter a valid password");
// }
// else if(password.length > 6){
//     document.write("Entered password: "+password+"<br/>")
//     document.write("Password can not be more than 6 characters")
//     document.write("<br/>"+"Please Enter a valid password")
// }else{
// document.write(" Valid password");

// }



// Q:16

// var university = 'University of Karachi';
// for(var i = 0; i <university.length; i++){
//     document.write(university[i]+"<br/>")
// }

// Q:17

// var input = prompt("Enter a value:" );
// var lastChar = input.charAt(input.length-1);
// document.write("User input : "+input+"<br/>"+
//                 "Last character of input : "+lastChar)

// Q:18

// var text = "The quick brown fox jumps over the lazy dog";
// var a = 'the';
// var count = 0;

//   for(var x = 0; x < text.length ; x++)
//   {
//     if (a.indexOf(text[x]) !== -1){
//       count += 1;
//     }
//   }
//   document.write("Text: "+ text
//       +"<br/>" +"There are " +count/3+" occurrences of word 'the'")
