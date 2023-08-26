//-- 1. ways to print in javascript
// console.log("hello world");
//alert("me");
//document.write("this is document write");



//-- 2. javascript console api
// console.log("hello world");
// console.warn("stop");
// console.error("stop");
// console.assert(5==5)
//console.clear()

/*multi
line 
comment*/



//-- 3. javascript variable by (var OR let).
//variable are containers to store data value
var number1=22;
var number2=23;
//console.log(number1+number2);



/*-- 4. Data types in javascript.
a.primitive data type: undefined, null, number, strings, boolean, symbol.
b.refrence data type: arrays, object, functions.
*/
//-numbers
var num1=56; 
var num2=24.4;
//-strings
var name1="soham";
var name2="sharma";
//-null that is object, null mean isme kuj mat rakho value
var name3=null;
//-boolean
var name4=false;
//-by default undefined, undefined mean jisme koi value nai hoti.
var name5
//-undefined, undefined mean jisme koi value nai hoti. 
var name6=undefined;
//-objects= inside this key value pair are present.
var marks={
    ravi: "ravi's 85",
    soham: 88,
}
//marks.soham=66;
//console.log(marks)
//console.log(marks.ravi);
//-Arrays= collection of elemnts{boolean,string,number}
var array=[1,2,"soham",4,5]
//array[0]=2;
//console.log(array);
//console.log(array[0]);
//-functions
function funcion1(){
    return 2+6;
}
//console.log(funcion1());



//-- 5. operators in javascript (+,-,*,/,=,==,&&,||,!).
//-arithmatic operators.
var a=3; //3 is operands and operators is that function use on two operands.
var c=5;
// console.log("the value of a+c is "+(a+c)); //output= the value of a+c is 8
// console.log("the value of a+c is",a+c); //output= the value of a+c is 8
// console.log("the value of a-c is",a-c);
// console.log("the value of a*c is",a*c);
// console.log("the value of a/c is",a/c);
//-assignment operators.
var b=c;
b+=2; //b=b+2
// console.log(c);
//-comparison operators
//console.log(b==c) //== this is comparison operator, if result is equal will give true iether false.
//-logical AND operators.
// console.log(true && true); //output= true
// console.log(true && false); //output= false
// console.log(false && false); //output= false
//-logical OR operators.
// console.log(true || true); //output= true
// console.log(true || false); //output= true
// console.log(false || false); //output= false
//-logical not operators.
//console.log(!false); //output= true



//-- 6. functions= used for dry principle.
// function avg(a,b){ //a,b is variable defined inside the function.
//     return (a=b)/2
// }
//console.log(avg(a,c));



//-- 7. conditional in javascript.
// if (b>c){   //if this condition is true than this if statement will execute and will no go further.
//     console.log("hello everyone")
// }
// else if(c>a){
//     console.log("hello and bye")
// }
// else{
//     console.log("bye everyone")
// }



//-- 8. loop in javascript.
//-for loop.
// var arr=[0,1,2,3,4,5]
// for(var i=0;i<arr.length;i++){ //(1,2,3)=1 will be done and then if 2 is true it will execute stement and then run 3, the loop is start again from 2>stament>3 unless 2 become false. 
//     console.log(arr[i]);
// }
//another way to irritate
// arr.forEach(function(element){
//     console.log(element)
// })
//-while loop.
// let l=0
// while(l<arr.length){ //till its true the loop will work.
//     console.log{arr[l]}; 
//     l++;
// }
//-do while loop.
// do{ //in do while this will run at first and then it will check condition.
//     console.log{arr[l]};
//     l++
// }while(l<arr.length);



//-- 9. Variable and const.
let variable=1; //use as latest variable system in javascript, because the scope is limited tyo {} brackest.
const a1=0; //const is used where variavble value cannot change



//-- 10. break and continue.
// var arr=[0,1,2,3,4,5]
// for(var i=0;i<arr.length;i++){ 
//     if(i=2){
//         break; //break= break this loop and come out.
//         continue; //continue skip this current loop.
//     } 
//     console.log(arr[i]);
// }



//-- 11. array methods in javascript.
let myarr=["soham","sharma",34,null,false]
// console.log(myarr.length);
// myarr.pop(); //remove last element.
// myarr.push("harry"); //push to last elemnt.
// myarr.shift(); //remove first element.
// myarr.unshift("harry"); //add element in the first.
// console.log(myarr.toString()); //convert to string
// console.log(myarr);



//-- 12. string method in javascript.
// let string1="how is everyone"
// console.log(string1.length); //tell number of characters.
// console.log(string1.indexOf("everyone")); //tell the position of that word or character from start.
// console.log(string1.indexOf("everyone")); //tell the position of that word or character from last.



//-- 13. dates
let day= Date();
// console.log(day);



//-- 14. Dom manipulation.=document object model.
// console.log(document); // or on console type document in console.
// console.log(document.location); //or on console type documen.location.
//- getElementById
// let elemclass=document.getElementById("click"); //or on console type document.getelementbyid("click").click()
// console.log(elemclass);
//- getElementByClassName
// let elemclass1=document.getElementsByClassName("container");
// console.log(elemclass1);
// elemclass1[0].style.background = "yellow"; //change collor of class.
// elemclass1[0].innerHTML; //see for html or to add put infront =  //** 
// elemclass[0].innerText; //see inner text  //**
//- getElementByTagName
// let getelem=document.getElementsByTagName("button");
// console.log(getelem); //give button results.
// createdelement=document.createElement('p');
// createdelement.innertext="this is created paragraph"; //*** 
// getelem[0].appendChild(createdlement) //what is getelem[0]=it is first button. //appendchild will add.
//- selecting using query
// let sell=document.querySelector(".container") //give first element
// sell=document.querySelectorAll(".container") //give all elements name container



//-- 15. Events in javascript.
// window.onload=function(){ //this is event when document get loaded the function will run
//     console.log("windows was loaded")
// }
// firstcontainer.addEventListener("click",function(){ //make event in javascript
//     console.log("clickked");
// })
// firstcontainer.addEventListener("mouseover",function(){ //make event in javascript
//     console.log("mouse over");
// })
// firstcontainer.addEventListener("click",function(){ // make u do somethings when someone click 
//     document.querySelector(".container")[0].innerHTML="<b>we have clicked</b>"
//     console.log("changed");
// })



//-- 16. arrow function.
function summ(a,b){
    return a+b;
}
sum=()=>{  //we can right this too.
    console.log("i am your log");
}



//-- 17. settimout and setinterval. setimout=schedul krne ke liye,setinterval=repeatly krane ke liye.
// setTimeout(sum,3000); //1,2, the 1 is function and 2 is 3000milisec check when to execute that function.
// setInterval(sum,3000);
// clr=setInterval(sum,3000); //then pass to ClearInterval(clr) to stop.



//-- 18. local storage in javascript= localstorage help to save data in user coputer as a string.
// run localStorage.clear() // to clear local storage.
// run localStorage.setItem("name","jack") // we se item in local storage.
// run localStorage.removeItem("name")


//-- 19. JSON= javascript object notation, use to exchange data. imp=json support double qoutes.
// obj = {name:"soham", number:3, a:{name: "harry"}} // we can add more object in object like a // typeof(obj) is object
// js = JSON.stringify(obj); // convert object into json string // typeof(js) is string 
// console.log(obj); //output> {name: 'soham', number: 3}
// console.log(js); //outut> {"name":"soham","number":3}
// parse=JSON.parse("{"name":"soham","number":3}"); // convert to previous form.

