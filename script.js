const cursor = document.querySelector(".cursor");
const container = document.querySelector("header");
const anchor = document.querySelector(".anc");

const img = document.querySelector(".nav img")
// const image = document.querySelector(".nav .image")



container.addEventListener("mousemove",(val)=>{
    cursor.style.left = val.x + "px";
    cursor.style.top = val.y + "px";
})

container.addEventListener("mousemove",()=>{
    img.classList.remove("image")
})