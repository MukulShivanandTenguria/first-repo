// const data=require("./data")
// import * as data from "./data"
// "use strict"
// console.log("This is my first repo");
// var a = 4;
// console.log(a);
// var a = 34;
// console.log(a);
// const car = { type: "Fiat", model: "500", color: "white" };
// console.log(car.type + car.model + car.color);
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };
// console.log(
//   " My First Name is " +
//     person.firstName +
//     " and Last Name is " +
//     person.lastName +
//     " and my eye Color is " +
//     person.eyeColor
// );
// let i = [];
// id = 0;
// document.getElementById("BUTTON").addEventListener("click", () => {
//   let text = document.getElementById("text").value;
//   i.push(
//     `<li id=${id}><div>${text}</li> <button onclick=deleteText(${id})>Click Me</button></div>`
//   );
//   ++id;
//   console.log(i);
//   let i1 = "";
//   i.map((val) => {
//     i1 = i1.concat(val);
//   });
//   document.getElementById("inner").innerHTML = i1;
// });

// const deleteText=(id)=>{
//   let array=[]
//   // console.log(i[1]!==document.getElementById(id));
//   for (let index = 0; index < i.length; index++) {
//     if(index!==id){
//       array.push(i[index])
//     }
//   }
//   i=array
//   console.log(array);
//   let i1 = "";
//   i.map((val) => {
//     i1 = i1.concat(val);
//   });
//   document.getElementById("inner").innerHTML = i1;
// }
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// const iterator = text.matchAll();
// console.log(Array.from(iterator))
// console.log(Array.from(text))
// let x = 0.2 + 0.1;
// console.log(x);
// let a=234234234234234234n
// let b=423423423489797893n
// let c= 0x20000000000003n
// let d=0b100000000000000000000000000000000000000000000000000011n
// let e=Number.MAX_SAFE_INTEGER
// let f=Number.MIN_SAFE_INTEGER
// let g=Number.isSafeInteger(2434)
// let h=Number.isSafeInteger(234234234647671245345324234234234)
// console.log(h);
// console.log(g);
// console.log(f);
// console.log(e);
// console.log(d);
// console.log(c);
// console.log(a*b);
// function Person(a,b){
// let c=a+b
// console.log(c);
// }
// let person1=new Person(9,8)
// console.log(person1);
// console.log(2**52);

// ARRAY METHODS

// const fruits = ["Banana", "Orange", "Apple","Aaple", "Mango"];

// let a=fruits.toString()
// a=fruits.unshift("Lemon")
// console.log(a);
// console.log(fruits);
// console.log(fruits.concat("potato"));
// console.log(fruits.slice(2,4));
// console.log(fruits.reverse());
// console.log(fruits.sort());
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(){return -1});
// console.log(points);
// console.log(Math.max(2,3,4,3,222,333,4,2,3));
// console.log(Math.max.apply(null,[2,3,4,3,222,333,4,2,3]));
// console.log(Math.min(2,2,2,3,4,3,222,333,4,2,3));
// console.log(Math.min.apply(null,[2,3,4,3,222,333,4,2,3]));
// console.log(Infinity);
// let c=points.sort()
// let c=fruits.sort()
// console.log(c);
// setInterval(()=>{
// let a=new Date()
// console.log(a.getSeconds());
// },1000)
// let a=new Date()
// console.log(a.getDate());
// console.log(Date.now());
// console.log(Math.round(6.4));
// console.log(Math.ceil(6.1));
// console.log(Math.floor(6.9));
// console.log(Math.trunc(6.4));
// console.log(Math.sign());
// console.log(Math.random());
// console.log(Boolean(' '));
// let name1=undefined
// let sname="Tenguria"
// let result=name1??sname
// console.log(result);
// let obj={fname:"Mukul",lname:"Tenguria",age:23}
// console.log(obj.gsadf);
// const letters = new Set(["a","a","b","b","b","c","c","c","c","c","c"]);
// letters.add("d");
// letters.forEach(element => {
//   console.log(element);
// })
// console.log(letters.values());
// let map1=new Map([
//   ["Name","Mukul"],
//   ["Age",9]
// ])
// console.log(map1);
// map1.delete("Name","Mukul")

// console.log(map1);
// console.log(map1.size);
// map1.forEach((e)=>{
//   console.log(e);
// })
// console.log(typeof function myFunc(){} );
// a=3
// console.log(a);
// const data={
//   fname:"Mukul",
//   lname:"Tenguria",
//   fullname:function(){
//     return this.fname+" "+this.lname
//   }
// }
// const data1={
//   fname:"Mukul",
//   lname:"Tenguria",
//   fullname:function(){
//     return this
//   }
// }
// const person2={
//   fname:"Mukul1",
//   lname:"Tenguria1",
// }
// let fullname=data.fullname.call(person2)
// let fullname1=data1.fullname()
// console.log(fullname);
// console.log(fullname1);

// CLASS
// let [array1,array2]=data
// class A{
//   constructor(fname,lname,height){
//     this.firstname=fname
//     this.lastname=lname
//     this.height=height
//   }
//    displayFname(){
//     console.log(this.firstname);
//     console.log(this.lastname);
//     console.log(this.height);
//   }
// }
// let a=new A("Mukul","Tenguria","5.7feet")
// a.displayFname()
// console.log(data);

// const data1={
//   "employees":[
//     `{"firstName":"John", "lastName":"Doe"}`,
//     `{"firstName":"Anna", "lastName":"Smith"}`,
//     `{"firstName":"Peter", "lastName":"Jones"}`
//   ]
//   }
// const data2={
//   employees:[
//     {firstName:"John", lastName:"Doe"},
//     {firstName:"Anna", lastName:"Smith"},
//     {firstName:"Peter", lastName:"Jones"}
//   ]
//   }
// console.log(data1)
// console.log(data2)
// console.log(JSON.stringify(data1))
// console.log(JSON.stringify(data2))
// console.log(JSON.stringify(data1))
// let a = "10";
// let b = 10;
// let x =
//   "Hello \
// World!";
//   let x = "Hello \
// World!";
// console.log(x);
// console.log(a === b);
// function data(){
//   let num=5;
//   return num 
//   num=num+12
//   console.log(num);
// }
// console.log(data());

// class A{
//   constructor(fname){
//     this.fname=fname;
//   }
// }
// class B extends A{
//   constructor(fname,lname){
//     super(fname)
//     this.lname=lname;
//   }
//   show(){
//     console.log(this.fname+" "+this.lname);
//   }
// }
// let name1=new B("Mukul","Tenguria")
// name1.show()
// let vr=5;
// let v="ghj"
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruits2=['Papaya',[...fruits]]
// console.log(fruits2);
// const fruits3= ["Banana", "Orange", "Apple", "Mango"];

let set1=new Set([fruits3])
console.log(set1);