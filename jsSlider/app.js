let elements = document.querySelectorAll(".slideShow-element");
let countEle = 1;

setInterval(()=>{
    countEle ++;
    let currentEle = document.querySelector(".current");
    currentEle.classList.remove("current");
    if(countEle > elements.length){
        elements[0].classList.add("current");
        countEle = 1;
    }else{
        
        currentEle.nextElementSibling.classList.add("current");
    }
},1500)


// setInterval(()=>{
    
//         elements.forEach((e)=>{

//             e.classList.add("current")
//         })
    
// },1000)




