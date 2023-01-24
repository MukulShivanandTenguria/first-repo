console.log("This is my first repo");
var a = 4;
console.log(a);
var a = 34;
console.log(a);
const car = { type: "Fiat", model: "500", color: "white" };
console.log(car.type + car.model + car.color);
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(
  " My First Name is " +
    person.firstName +
    " and Last Name is " +
    person.lastName +
    " and my eye Color is " +
    person.eyeColor
);
let i = [];
id = 0;
document.getElementById("BUTTON").addEventListener("click", () => {
  let text = document.getElementById("text").value;
  i.push(
    `<li id=${id}><div>${text}</li> <button onclick=deleteText(${id})>Click Me</button></div>`
  );
  ++id;
  console.log(i);
  let i1 = "";
  i.map((val) => {
    i1 = i1.concat(val);
  });
  document.getElementById("inner").innerHTML = i1;
});

const deleteText=(id)=>{
  let array=[]
  // console.log(i[1]!==document.getElementById(id));
  for (let index = 0; index < i.length; index++) {
    if(index!==id){
      array.push(i[index])
    }
  }
  i=array 
  console.log(array);
  let i1 = "";
  i.map((val) => {
    i1 = i1.concat(val);
  });
  document.getElementById("inner").innerHTML = i1;
}
let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll();
console.log(Array.from(iterator))
console.log(Array.from(text))
let x = 0.2 + 0.1;
console.log(x);
let a=234234234234234234n
let b=423423423489797893n
let c= 0x20000000000003n
let d=0b100000000000000000000000000000000000000000000000000011n
let e=Number.MAX_SAFE_INTEGER
let f=Number.MIN_SAFE_INTEGER
let g=Number.isSafeInteger(2434)
let h=Number.isSafeInteger(234234234647671245345324234234234)
console.log(h);
console.log(g);
console.log(f);
console.log(e);
console.log(d);
console.log(c);
console.log(a*b);
function Person(a,b){
let c=a+b
console.log(c);
}
let person1=new Person(9,8)
console.log(person1);
console.log(2**52);

// I added a new code in javascript file 
// i am mukul Tenguria 
// I live in indore 
// 