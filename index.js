console.log("Hello World");
console.log(3 +
    1
    + 2);
console.log(NaN*0);
let numb = 255;
console.log(numb.toString(16));

// string
const nam = "sanjay";
const age = 35;
const job = "Lecturer";
console.log(`My name is ${nam} aged ${age} & working as ${job}.`)
const data = {
    user: {
        isLoggedIn:true,
        username:"js1223",
        avatar: "puppy",
        fav:["python","JS","java"]
    },
    topResults:{
        amt:3,
        scores:[120,100,99]
    }
}
array = [4,5,8,9];
sumz = array.reduce((a,b)=>{return a+b},0);
console.log(sumz);
// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}


function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);
// console.log(data);
// for(let i=0;i<data.user.fav.length;i++){
//     console.log(data.user.fav[i]);
// }
// for(let i=0;i<data.topResults.scores.length;i++){
//     console.log(data.topResults.scores[i]);
// }
// const d ={
//     ...data,
//     ["user"]:{
//         ...data["user"],
//         isLoggedIn:false,
//     }
// }
// console.log(d);

// const fruits = ["Mango","Grapes","Kiwi"];
// for(let index in fruits){
//     console.log(index)
// }

// const student = { name:"sanjay",usn:"2vd25"}
// for(let i of student){
//     console.log(i)
// }

let str = "456";
// console.log(typeof str);
let num = Number(str);
// console.log(typeof num);
let string = String(num);
// console.log(typeof string);

let x = 1;

x = -x;
// console.log( x );
let a = 1, b = 3;
console.log( b - a);