// const menubtn=document.querySelector("#menu")
// const nav12=document.querySelector("#navlinks")
// // const nav12=document.getElementById("navlinks")

// menubtn.addEventListener('click',()=>{
//     nav12.classList.toggle("mobile")
//     console.log("Abhinav")
// })
const menubtn=document.querySelector("#menu")
const navl=document.querySelector("#navlinks")
menubtn.addEventListener('click',()=>{
   navl.classList.toggle("mobile")
   menubtn.classList.toggle("fa-times")
})


let mainimg=document.getElementById("mainimg");
let smallimg=document.getElementsByClassName("smallimg");

smallimg[0].onclick=function(){
    mainimg.src=smallimg[0].src;
}
smallimg[1].onclick=function(){
    mainimg.src=smallimg[1].src;
}
smallimg[2].onclick=function(){
    mainimg.src=smallimg[2].src;
}

smallimg[3].addEventListener('click',()=>{
    mainimg.src=smallimg[3].src
})


