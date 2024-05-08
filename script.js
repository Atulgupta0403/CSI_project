const cursor = document.querySelector(".cursor");
const container = document.querySelector("header");
const anchor = document.querySelector(".anc");
const nav = document.querySelector("navbar");
const about = document.querySelector(".about");
const img = document.querySelector(".nav img")

// const image = document.querySelector(".nav .image")

container.addEventListener("mousemove",(val)=>{
    cursor.style.left = val.x + "px";
    cursor.style.top = val.y + "px";
})

nav.addEventListener("mousemove",()=>{
    img.classList.remove("image")
    cursor.style.backgroundColor= "white"
})

about.addEventListener("mousemove",()=>{
    img.classList.add("image")
    cursor.style.backgroundColor= "black"
})