//wait the window to load
 /*window.onload=function(){
document.querySelector("h1").style.color="blue";
};
*/
//window.alert("hello from 35 file");
//document.writeln("<h1> hello <span> page</span> </h1>");
//console.log(typeof"salah ");
/*
var user ="SALAH";
console.log(user);
console.log(user);
console.log(user);
*/
/*
var a =1;
var a =2;
console.log(a);

console.log(a);
var a=2;
*/
/*
console.log("elzero web\"school\" ");

console.log('elzero web "school"');

console.log('elzero web \'school\' ');

console.log("elzero web 'school'");


console.log("elzero \
web \
school");

console.log('elzero \nweb \nschool ');
*/
/*
let a="I love";
let b="Java script";
document.writeln(a+" "+b);
console.log(a+" "+b);
*/
/*
let a="salah";
let b="ali";
let c ="ahmed";
console.log(`${a}   ${b} " "
${c}  `);
*/
/*
let title="Hello Elzero", Description="Elzero web school", date="25/10";
let x=`
  <div class="card">

    <h3>${title}</h3>
    <p>${Description} </p>
    <span>${date}</span>
</div>

  <div class="card">

    <h3>${title}</h3>
    <p>${Description} </p>
    <span>${date}</span>
</div>

  <div class="card">

    <h3>${title}</h3>
    <p>${Description} </p>
    <span>${date}</span>
</div>

  <div class="card">

    <h3>${title}</h3>
    <p>${Description} </p>
    <span>${date}</span>
</div>

`;
document.writeln(x);
console.log(`${title}
    ${Description}
    ${date}
    `);
*/

/*
let a=10;
let b="20";
let c=80;
console.log(++a + +b++ + +c++ - +a++);                                  //100
console.log(++a + -b + c++ - -a++ + +a);                                //100
console.log(--c + +b + --a * +b++ - +b *a + --a - +true);               //100


let d ="100";
let e ="20";
let f =30;
let g =true;

console.log(+d * +e);                                                 //2000
console.log(+d + +e + +e + f + g +g + g);                             //173
*/


/*
let a =1_00;
let b =2_00.5;
let c =1e2;
let d=2.4;

console.log(Math.round(Math.min(a,b,c,d)));    //2
console.log(a**Math.floor(d));                 //10000
console.log(a**parseInt(d));                   //10000

console.log(Math.round(d));                     //2
console.log(Math.floor(d));                     //2
console.log(Math.ceil(d));                      //3
console.log(Math.trunc(d));                     //2
console.log(parseInt(d));                       //2


console.log((Math.round(b)/Math.ceil(d)).toFixed(2));
console.log((parseInt(b)/Math.ceil(d)).toFixed(2));
console.log(Math.round(b)/Math.ceil(d));
*/

/*
let a ="Elzero web school";

console.log(a.charAt(2).toUpperCase()+a.slice(3,6));


console.log(a.charAt(13).toUpperCase().repeat(8));

console.log(a.substring(0,6).split());

console.log(a.substr(0,6),a.substr(11,17));
console.log(a.substr(0,6),a.substr(11));

console.log(a.charAt(0).toLowerCase()+a.substr(1,a.length-2).toUpperCase()+a.charAt(a.length-1).toLowerCase());

*/
/*
console.log(10=="10");   //compare value only
console.log(10!="10");   //compare value only
console.log(10==="10");   //compare value and type 
console.log(10!=="10");   //compare value and type
console.log(10!==10);   //compare value and type
console.log("osama"==="ahmed");
console.log(typeof"osama"===typeof"ahmed");
*/
/*
console.log(10=="10"&& 10>8 && 10>50);
console.log(10=="10"|| 10>8 || 10>50);
*/
/*
let price=100;
let discount=true;
let discountamount=30;
                                //control flow
if(discount==true){
  price-=discountamount;
}
console.log(price);
*/
/*
let price=100;
let discount=true;
let discountamount=30;
                                //control flow
if(discount==false){
  price-=discountamount;
}
else if(discountamount==70){
  price-=40;
}
else{
  price-=5;
}
console.log(price);
*/

/*
let price=100;
let discount=false;
let discountamount=30;
let country="egypt";
let student=true;
if(discount==true){
  price-=discountamount;
}
else if(country=="egypt"){       //Nested if
  if(student==true){
    price-=discountamount+30;
  }
  else{
    price-=discountamount+10;
  }
}

else{
  price-=5;
}
console.log(price);
*/

/*
let theage=30;
//if                       else if                              else
theage>20 ? console.log(20):theage>40 ? console.log("salah"):console.log(mohamed);
*/
/*
var price= 0;
console.log(`the price is ${price || 200}`);
console.log(`the price is ${price ?? 200}`);
var price =null;
console.log(`the price is ${price || 200}`);
console.log(`the price is ${price ?? 200}`);
*/

/*  CHALLENGE
let a =10;
a>10?console.log(10):a>10 && a<=40?console.log("10 to 40"):a>40?console.log(">40"):console.log("unknown");
*/
/*
let st ="Elzero Web school";
if((st.length*2).toString() === "34"){
  console.log("good");
}
if(st.charAt(7).toLowerCase()==="w"){
  console.log("good");
}

if(st.length!=="string"){
  console.log("good");

}

 if(st.length==="number"){
  console.log("good");
 }
 if(st.slice(0,6)+st.slice(0,6)==="ElzeroElzero"){
  console.log("good");
 }
*/
/*
let jop="manager";
let salary=0;
switch(jop){
case "manager":
  salary=5000;
  console.log(`the value is ${salary}`);
  break;
case "it" :
case "support":
  salary=6000;
  console.log(`the value is ${salary}`);
  break;
case "devloper": 
case "designer":

  salary=7000;
  console.log(`the value is ${salary}`);
  break;
default:
  salary=4000;
  console.log(`the value is ${salary}`);
break;
}
*/
/*
let holidays=0;
let money =0;
if(holidays==0){
  money=5000;
 console.log(`my money is ${money}`);
}
else if(holidays==1 || holidays==2){
  money=3000;
 console.log(`my money is ${money}`);

}
else if (holidays==3){
  money=2000;
 console.log(`my money is ${money}`);

}
else{
 console.log(`my money is ${money}`);

}
 */
/*
let myfriends=["salah","ali","mohamed",["gamal", "khaled"]];
console.log(`hello ${myfriends[1]}`);
console.log(`hello ${myfriends[2]}`);
console.log(`hello ${myfriends[0][3]}`);
console.log(`hello ${myfriends[3][0]}`);
console.log(` ${myfriends[3][0][2]}`);
console.log(` ${myfriends[3][1][1]}`);
*/
/*
let myfriends=["salah","ali","mohamed","khaled"];
console.log(myfriends.length);
myfriends[2]="ibrahim";
console.log(myfriends);
myfriends[4]="gamal";                      
console.log(myfriends);
myfriends[6]="hoda";
console.log(myfriends);
myfriends.length=2;
console.log(myfriends);
console.log(myfriends.length-1)=khalil;
console.log(myfriends);
*/

/*
let myfriends=["salah","ali","mohamed","khaled"];
console.log(myfriends);
myfriends.unshift("hala","huda");
console.log(myfriends);
myfriends.push("hana");
console.log(myfriends);
let first=myfriends.shift();
console.log(myfriends);
console.log(`first name is ${first}`);
let last =myfriends.pop();
console.log(myfriends);
console.log(`last name is ${last}`);
*/
/*
let zero=0;
let counter=3;
let my =["ahmed","mazero","Elham","osama","gamal","ameer"];
console.log(my.slice(zero,++counter).reverse());
console.log(my.slice(++zero,--counter).reverse());
console.log(my[--counter].slice(--zero,counter)+my[++zero].slice(counter));
console.log(my[zero].slice(-counter,-zero)+(my[zero].slice(-(--counter))).toLocaleUpperCase());
*/


 /*
let myadmins = ["ahmed","osama","sayed","stop","samera"];
let employes = ["amgad","samah","ameer","omar","othman","amany","samia"];
let showcount=8;
  document.write(`<div>`);

document.write(`<div>WE HAVE X ADMIN</div>`);
document.write(`<div>WE HAVE ${3}  ADMIN</div>`);



document.write(`<h>THE ADMIN FOR TEAM 1 IS AHMED</h1>`);
 document.write(`<h1>TEAM MEMBER :</h1>`);

 for(let  i = 0 ;i<showcount ; i++){
 
if (employes[i][0]=="a"){
  document.write(`<h2> ${employes[i]}</h2>`);
}
 }

document.write(`<h>THE ADMIN FOR TEAM 2 IS OSMAN</h1>`);
 document.write(`<h1>TEAM MEMBER :</h1>`);

 for(let  j = 0 ;j<6 ; j++){
 if (employes[j][0]=="o"){
  document.write(`<h2> ${employes[i]}</h2>`);
}
 }
 
document.write(`<h>THE ADMIN FOR TEAM 3 IS SAMEH</h1>`);
 document.write(`<h1>TEAM MEMBER :</h1>`);

for(let k = 0 ;k<7 ; k++){
 if (employes[k][0]=="s"){
  document.write(`<h2> ${employes[i]}</h2>`);
 }
 
}
document.write(`</div>`);
 
*/


/*
let myadmins = ["ahmed","osama","sayed","stop","samera"];
let employes = ["amgad","samah","ameer","omar","othman","amany","samia"];

document.write(`<div>WE HAVE X ADMIN</div>`)
let adminscount=0;
for(let i=0 ;i<myadmins.length ; i++){
  if(myadmins[i]==="stop"){
break;
  }
adminscount++;
}
document.write(`<div>WE HAVE ${adminscount} ADMIN</div>`);
for(let i=0 ;i<adminscount ; i++){
  document.write(`<hr>`);
document.write(`<div>THE ADMIN FOR TEAM ${i+1} is ${myadmins[i]}</div>`);
document.write(`<h3>Team members</h3>`);
  
let membercount=1;
for(let j =0; j<employes.length;j++){
  if(employes[j][0]===myadmins[i][0]){
document.write(`<p>${membercount} ${employes[j]}</p>`)
membercount++;
  }
}
}


*/









/*
function sayhello(username){
console.log(`Hi ${username}`);

}
sayhello("osama");
sayhello("salah");
sayhello("ali");

*/
/*
function sayhello(username,age){
  if(age<20){
    console.log("App is not suitale");
  }
  else{
console.log(`Hi ${username} your age is ${age}`);

}
}
sayhello("osama",40);
sayhello("salah",50);
sayhello("ali",15);

function generateyear(start,end,exclude){
for(let i = start ; i<=end ; i++){
 if(i===exclude){
  continue;
 }
console.log(i);
}
}
generateyear(1985,2002,2001);
*/

/*
function generateyear(start,end){
for(let i = start ; i<=end ; i++){
  console.log(i);
 if(i===15){
  return `interruptting`;
 }

}
}
generateyear(10,20);

*/
/*
function sayhello(username,age="unknown"){
//if (age ===undefined){
  //age="unknown";
//}
//age=age||"unknown";
return `hello ${username} your age is ${age}`;
}
console.log(sayhello("osama"));
*/
/*
function calc(...numbers){
let result=0;
for(let i=0 ; i<numbers.length ; i++){
  result+=numbers[i];
}
return`final result is ${result}`;
}
console.log(calc(10 ,20 ,50 ,60 ));

 */
/*

let index=0;
while(index <10){
 console.log(index);
 index ++;
 if (index===3){
  break;
    
  }
}

*/
/*
function showdetails(a ,b ,c){
  let info=[a,b,c];
  let first ,second ,third;
  for(let i=0;i<3;i++){

if(typeof info[i] === "string"){
first =info[i];
}
else if(typeof info[i] === "Number"){
  second = info[i];
  }

else if(typeof info[i] === "boolean"){
  if(info[i]===true){
    third = "available";
  }
  else{
    third = "not available";
  }
}
  }
console.log(`hello ${first}, your age is ${second}, you are ${third} for here`);

}
showdetails("osama", 38 , true);
//showdetails(38,"osama",true);
//showdetails(true,38,"osama");
//showdetails(false,"osama",38);

*/
/*
function showdetails(a,b,c){
  let name,age,status;
  if(typeof a==="string"){
    name=a;
  }
  else if (typeof b==="string"){
    name=b;
  }
  else{
    name=c;
  }
  if(typeof a==="number"){
    age=a;
  }
  else if (typeof b==="number"){
    age=b;
  }
  else{
    age =c;
  }

  if(typeof a==="boolean"){
    status=a;
  }
  else if (typeof b==="boolean"){
    status=b;
  }
  else{
    status =c;
  }
  if (status===true){
    status="";

  }
  else{
    status="not";
  }
    console.log(`hello ${name}, your age is ${age}, you are ${status} available for here`);
        }

showdetails("osama", 38 , true);
showdetails(38,"osama",true);
showdetails(true,38,"osama");
showdetails(false,"osama",38);
*/
/*
let mynumbers=[20,50,10,60];
//let calc=function(one,two,...nums){}
let calc=(one,two,...nums)=>one+two+nums[0];
console.log(calc(10,mynumbers[0],mynumbers[1]));


//let calc=(one,two,...nums)=>one+two+nums.shift();
//console.log(calc(10,mynumbers.shift(),mynumbers.shift()));
*/
/*
let names=(...person)=>`string[${person.join("],[")}]=>Done!`;

console.log(names("osama","salah","ali","mohamed"));
*/

/*
let mynums=[1,2,3,4,5,6];
let addself=mynums.map(function(element,index,arr){
  console.log(`current Element => ${element}`);                 //map
  console.log(`current index => ${index}`);
  console.log(` Array => ${arr}`);
  console.log(`this => ${this}`);

},10);
*/

/*
let mynums=[1,2,3,4,5,6];
let addself=mynums.map(function(element,index,arr){
return element+element;                                   //map

},10);
console.log(addself);
*/

/*

let mynums=[1,2,3,4,5,6];
let addself=mynums.map((element)=>element+element);         // arrow function
console.log(addself);
*/

/*
let mynums=[1,2,3,4,5,6];
function addition(element){
  return element+element;
}
let addself=mynums.map(addition);
console.log(addself);
*/

/*
      //CHALLENGE 78
let mystring="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = mystring.split("").filter(function(element){
  return isNaN (element);
})
.map(function(element){
return element!==","?element:"";
})
.reduce(function(acc,curr){
    return acc+curr;
})
//.slice(1,18)
.slice(true,-!false)
.split("_")
.join(" ");
console.log(solution);
*/
/*
let myelement=document.createElement("div");
let myheading=document.createElement("h1");
let myparagraph=document.createElement("p");
let mycomment=document.createComment("this is div");
let myadmins=document.createTextNode("hello salah");
let myfriends=document.createTextNode("salah khaled");

myheading.appendChild(myadmins);
myelement.appendChild(myheading);

myparagraph.appendChild(myfriends);
myelement.appendChild(myparagraph);

myelement.appendChild(mycomment);
myelement.appendChild(myadmins)

myelement.className="salah";

document.body.appendChild(myelement);
*/

/*
let myHeader=document.createElement("header");
let mydiv=document.createElement("div");
let myul=document.createElement("ul");
let myli1 =document.createElement("li");
let myli2 =document.createElement("li");
let myli3 =document.createElement("li");
let myli4 =document.createElement("li");

let logoText=document.createTextNode("Elzero");
let text1=document.createTextNode("home");
let text2=document.createTextNode("about");
let text3=document.createTextNode("service");
let text4=document.createTextNode("contact");

mydiv.appendChild(logoText);
myli1.appendChild(text1);
myli2.appendChild(text2);
myli3.appendChild(text3);
myli4.appendChild(text4);

myheader.className="website-head";
mydiv.className="logo";
myheader.appendChild(mydiv);

myul.className="menu";
myheader.appendChild(myul);
myul.appendChild(myli1);
myul.appendChild(myli2);
myul.appendChild(myli3);
myul.appendChild(myli4);

//styling header

document.body.style.cssText="font-family:arial";
myHeader.style.cssText="display:flex;justify-content:center;align-items:center;padding:10px";
logotext.style.cssText="color:green;font-weight:700;font-size:25px";
myul.style.cssText="display:flex;justify-items:center";
myli1.style.cssText="list-style:none";
myli2.style.cssText="list-style:none";
myli3.style.cssText="list-style:none";
myli4.style.cssText="list-style:none";
text1.style.cssText="color:gray;padding:10px;cursor:pointer;margin-right:10px";
text2.style.cssText="color:gray;padding:10px;cursor:pointer;margin-right:10px";
text3.style.cssText="color:gray;padding:10px;cursor:pointer;margin-right:10px";
text4.style.cssText="color:gray;padding:10px;cursor:pointer;margin-right:10px";
let content=document.createElement("div");
content.className="content";
for(let i= 1 ; i <=15; i++){
let product=document.createElement("div");
let span=document.createElement("span");
span.TextContent = i;
let product_Text=document.createTextNode("product");
product.className="product";
product.appendChild(span);
content.appendChild(product);
product.prepend(span);
product.append(product_text);
}
//styling content
content.style.cssText="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;background-color:#f1f1f1;padding:20px";
product.style.cssText="background-color:white;display:flex;flex-direction:column;text-align:center;padding:20px;border:2px solid black;border-radius:5px;color:gray;font-size:30px";
span.style.cssText="font-size:30px;color:black;margin-bottom:10px";
let myfooter=document.createElement("footer");
myfooter.className="footer";
myfooter.createTextNode="copyright 2021";
myfooter.style.cssText="font-size:16px;background-color:green;text-align:center;color:white;padding:20px";
document.body.appendChild(myHeader);
document.body.appendChild(content);
document.body.appendChild(myfooter);

*/

/*
let header=document.createElement("header");
let logoDiv =document.createElement("div");
let logo =document.createElement("a");
let ul=document.createElement("ul");
let li1 =document.createElement("li");
let li2 =document.createElement("li");
let li3 =document.createElement("li");
let li4 =document.createElement("li");
let a1 =document.createElement("a");
let a2 =document.createElement("a");
let a3 =document.createElement("a");
let a4 =document.createElement("a");


let logoText=document.createTextNode("Elzero");
let text1=document.createTextNode("home");
let text2=document.createTextNode("about");
let text3=document.createTextNode("service");
let text4=document.createTextNode("contact");

//appending element into the header

document.body.appendChild(header);
header.appendChild(logoDiv);
header.appendChild(ul);
logoDiv.appendChild(logo);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(a4);
logo.appendChild(logoText);
a1.appendChild(text1);
a2.appendChild(text2);
a3.appendChild(text3);
a4.appendChild(text4);

//styling header

document.body.style.cssText="font-family:arial";
header.style.cssText="display:flex;justify-content:center;align-items:center;padding:10px";
logo.style.cssText="color:green;font-weight:700;font-size:25px";
ul.style.cssText="display:flex;justify-items:center";
li1.style.cssText="list-style:none";
li2.style.cssText="list-style:none";
li3.style.cssText="list-style:none";
li4.style.cssText="list-style:none";
a1.style.cssText="color:gray;padding:10px;cursor:pointer;margin-right:10px";
a2.style.cssText="color:gray;padding:10px;cursor:pointer;margin-right:10px";
a3.style.cssText="color:gray;padding:10px;cursor:pointer;margin-right:10px";
a4.style.cssText="color:gray;padding:10px;cursor:pointer;margin-right:10px";


//creating content

let content = document.createElement("div");
content.className="content";
//header.after(content);
for(let i= 1 ; i <=15; i++){
let product = document.createElement("div");
let span = document.createElement("span");
span.textContent = i;
let product_text=document.createTextNode("product");
product.className="product";

content.append(product);
product.prepend(span);
product.append(product_text);
document.body.appendChild(content);

}

//styling content

content.style.cssText = "display:grid;grid-template-columns:repeat(3,1fr);gap:20px;background-color:#f1f1f1;padding:20px";
/*
let products=document.querySelectorAll(".product");
products.forEach((product)=>{product.style.cssText=`background-color:white;display:flex;flex-direction:column;
  text-align:center;padding:20px;border:2px solid black;border-radius:5px;color:gray;font-size:30px`;});
spans.forEach((span)=>{`font-size:30px;color:black;margin-bottom:10px`;});


//footer
let footer = document.createElement(`footer`);
footer.textContent=`copyright 2021`;

document.body.appendChild(footer);
//styling
footer.style.cssText=`font-size:20px;background-color:green;text-align:center;color:white;padding:10px;width:100%`;
*/

                  //CHALLENGE DESTRCTURIN
/*
let chosen=2;
let myfriends =[
{ title: "osama", age: 39, available: true, skills: ["html","css"] },
{ title: "ahmed", age: 25, available: false, skills: ["python","Django"] },
{ title: "sayed", age: 33, available: true, skills: ["php","laravel"] },

];
  if(chosen==1 ){
let={ title,age,available,skills}=myfriends[0];
 available==true?console.log("avaliable"):console.log("not avaliable");
  }

  else if(chosen==2  ){
let ={ title,age,available,skills}=myfriends[1];
available==true?console.log("avaliable"):console.log("not avaliable");
  
  }
  else{
let={ title,age,available,skills}=myfriends[2];
available==true?console.log("avaliable"):console.log("not avaliable");
  
  }

  console.log(`your title is ${title}`);
  console.log(`your age is ${age}`);
  console.log(`your skills is ${skills[1]}`);
*/
/*
//CHALLENGE 

let n1 =[10,30,10,20];
let n2 =[30,20,10];
console.log([...n1,...n2].length*Math.max(...n2));
*/

/*
let salah=`2elzero1 web school @ ELZERO salah`;
let ali=/(ELZERO\b)/ig;
let khaled=/\w/g;
console.log(salah.match(ali));
console.log(salah.match(khaled));

*/
/*
document.getElementById("register").onsubmit = function(){
let phoneinput=document.getElementById("phone").value;
let phonere=/\d{4}\s\d{3}-\d{4}/;
let validationresualt=phonere.test(phoneinput);
console.log(validationresualt);
return false;
}
*/

/*
//CHALLENGE 
let url1=`elzero.org`;
let url2=`http://elzero.org`;
let url3=`https://elzero.org`;
let url4=`https://www.elzero.org`;
let url5=`https://www.elzero.org:articles.php?id=100&cat=topics`;


//let re =/(https)?(:\/\/)?(www.)?\w+.\w+(.+)?/ig;
//let re =/(https?:\/\/?(www.)?)?\w+.\w+(.+)?/ig;
let re =/(https:\/\/www.)?\w+.\w+(.+)?/ig;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
*/

let title =document.querySelector(`.title`);
let turn =`x`;
let squares = [];

function end(num1,num2,num3){
  
  title.innerHTML= `${squares[num1]} winner`;

document.getElementById(`item`+num1).style.background =`#000`;
document.getElementById(`item`+num2).style.background =`#000`;
document.getElementById(`item`+num3).style.background =`#000`;

setInterval(function(){title.innerHTML +=`.`},1000);
setTimeout(function(){location.reload()},4000);
}

function winner(){

  for(let i= 1 ; i<10 ;i++){
 squares[i]=document.getElementById(`item` + i ).innerHTML;
  }

  if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1] !=""){

end(1,2,3);
  }
 else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[5] !=""){

end(4,5,6)
 }
 else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[8] !=""){
end(7,8,9)
 }

 else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[5] !=""){
end(1,5,9)
 }
 else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[5] !=""){
end(3,5,7)
 }

 else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[5] !=""){
end(2,5,8)
 }
 else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1] !=""){
end(1,4,7)
 }
 else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[6] !=""){
end(3,6,9)
 }
 else if(squares[1] !="" && squares[2] != "" && squares[3] != "" && squares[4] !=""
  && squares[5] !="" && squares[6] !="" && squares[7] !="" && squares[8] !="" && squares[9]!=""  ){
  
     title.innerHTML=`Draw(تعادل)`;
    setInterval(function(){title.innerHTML+=`.`},1000);
    setTimeout(function(){location.reload()},4000);
  

}
}
 
  
function game(id){

  let element=document.getElementById(id);
if(turn===`x` && element.innerHTML==""){
  element.innerHTML=`x`;
 turn=`o`;
 title.innerHTML=`o`;

}
else if(turn===`o` && element.innerHTML==""){
  element.innerHTML=`o`;
  turn=`x`;
  title.innerHTML=`x`;
  
}
winner();
}
































































































