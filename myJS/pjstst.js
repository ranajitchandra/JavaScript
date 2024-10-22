
// let num = 13;

// if (num % 2 === 0){
//     console.log("even")
// }else{
//     console.log("odd")
// }

// Ternary ..................

// let num = Number(prompt("enter number"));

// num>0 ? console.log("Positive") :num<0 ? console.log("Nagetive") : console.log("Zero");






// Loop....................

// let cars = ["Saab", "Volvo", "BMW", "Saab", "Volvo", "BMW"];

// for(i=0; i<cars.length; i++){
//     console.log(cars[i])    
// }



// let items = [1,2,5,45,87,21,6,66,1,5,];
// prefar for array to (for of loop) for getting value
// for(el of items){
//     console.log(el)
// }


// let items = [1,2,5,4,8,2,6,3,1,5];

// let total = null;

// for(i=0; i<items.length; i++){
//     total = total+items[i];
    
// }
// let result ="total sum is "+total + " tatal item is "+ items.length + " AVG result " + total / items.length
// console.log(result)


// all item decress 10% offer, that means apply every one index.

// let items = [120,222,53,40,85,21,60,34,110,50];

// for(i = 0; i<items.length; i++){
//     items[i] =items[i] - (items[i] * 10 /100);
//     console.log(`after offer value is ${items[i]}`)
// }

// let i = 0;
// for(let el of items){
//     items[i] =el - (el * 10 /100)
//     console.log(`after offer value is ${ items[i]}`)
// }


// let arrrr = [3,5,3,6,7,9];

// arrrr.forEach(function frVal(val){
//     console.log(val);
// })


// let arrr = ["hi", "hello", "hey", "excuse me"];

// let af = (val) => {
//     console.log(val)
// }
// arrr.forEach(af)





// IIFE function.................(Func)(calling);

// (function myNmae(msg){
//     console.log(`Hi----- ${msg}`);
// })("IFFE");







// arrow function.................

// let h =(a,b) =>{
//     return a+b;
// }
// console.log(h(4,5))


// let arw = (a)=>{
//     console.log("Arrow");
    
// }
// arw();

// let arw2 = ()=>{
//      return console.log("Hello");
// }

// function countvowels(str) {
//     let count = 0;
//     for(i of str){
//         if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u" || i === "A" || i === "E" || i === "I" || i === "O" || i === "U") {
//             count +=1;
//         }
//     }
//     return count;
// }
// countvowels("ashdhasdwuddwq");


// const countvow = (str) => {
//     let count = 0;
//     for(i of str){
//         if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u" || i === "A" || i === "E" || i === "I" || i === "O" || i === "U") {
//             count +=1;
//         }
//     }
//     return count;
// }


// let getvowel = (a)=>{
//     let count = 0;
//     for(i=0; i<a.length; i++){
//         if(a[i]==="a" || a[i]==="e" || a[i]==="i" || a[i]==="o" || a[i]==="u"){
//             count ++;
//         }
//     }
//     console.log(count)
// }
// getvowel("amar sonar bangladesh")



// for each loop automatic print value it is work with array .......

// let arr = [120,222,53,40,85,21,60,34,110,50];

// arr.forEach(function(val){
//     console.log(val)
// })



// let arr = [2,3,5,40,8,6,9];
// //arrow function
// arr.forEach((val)=>{
//     console.log(`value ${val**2}`) // exponantioal
//     console.log(`ddd ${val*val}`)
// })


// let nums = [10, 20, 30, 40];

// nums.forEach((val,indx,arr)=>{
//     arr[indx] = val + 5;
//     console.log(`in___ ${arr[indx]}`);
    
    
// })
// console.log(nums);





//callBack function

// let arr = [2,3,5,40,8,6,9];
// //arrow function
// let expo = (val)=>{
//     console.log(`value ${val**2}`) // exponantioal
// }
// arr.forEach(expo)




// map for array

// let mapp = [8,4,6,7,9,5];

// mapp.map((val)=>{
//     console.log(val)
// })

//new array callBack Function
// map and forEach is loop
// let newArr = mapp.map((val)=>{
//     return val*val
// })
// console.log(newArr)





// DOM

let div = document.querySelector("#box");
    div.style.backgroundColor="green";
    div.style.fontSize="16px";
    div.style.color="white";


let btn = document.createElement("button");
    btn.innerText="create el btn";

    div.append(btn);
    div.prepend(btn);
    div.after(btn);
    div.before(btn);

div.classList.add("newclass");
div.classList.remove("newclass");


let clkme = document.querySelector("#clkme");

    clkme.onclick = () =>{
        console.log("click Func")
    }


let mode = document.querySelector("#mode");
let sw = 0;

mode.addEventListener("click", (e)=>{
    if(sw == 0){
        document.querySelector("body").style.backgroundColor="red";
        mode.classList.add("btn")
        sw = 1
        console.log(e.target.id)
        console.log(e.target.value)
    }else{
        document.querySelector("body").style.backgroundColor="green";
        mode.classList.remove("btn")
        sw = 0
        console.log(e.target.value)
    }

})



// it is nested, callBack hell
function getData(id, nex){
    setTimeout(()=>{
        console.log("Data_ID ", id);
        if(nex){
            nex();
        }
    }, 1000)
}

getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4);
        });
    });
});




// promise

let promise = new Promise((resolve, reject) =>{
    console.log("Promise Print")
})









