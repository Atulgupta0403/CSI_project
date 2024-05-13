const cursor = document.querySelector(".cursor");
const container = document.querySelector("header");
const anchor = document.querySelector(".anc");
const nav = document.querySelector("navbar");
const about = document.querySelector(".about");
const img = document.querySelector(".nav img");


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

const tl = gsap.timeline()

tl.from(".nav .name h1",{
    y : -30,
    opacity : 0 ,
    duration : 1,
    scale : 0.2
})
tl.from(".nav .anc a",{
    y : -30,
    opacity : 0 ,
    duration : 1,
    stagger : 0.3
})
tl.from(".left",{
    x:-350,
    opacity : 0,
    duratin : 0.5,
},"amin")
tl.from(".right",{
    x:350,
    opacity : 0,
    duratin : 0.5,
},"amin")


const contact  = document.querySelector(".nav .anc .contact")
const cross = document.querySelector(".white i")

const t2 = gsap.timeline()
t2.to(".white",{
    x:-460,
    duration : 0.6
})
t2.from(".white .matter a",{
    x:200,
    opacity : 0,
    duration : 0.3,
    ease : "none",
    stagger : 0.3
})
t2.from(".white i",{
    opacity : 0,
})

t2.pause()

contact.addEventListener("click",()=>{
    t2.play()
})

cross.addEventListener("click",()=>{++
    t2.reverse()
})



const car = document.querySelector(".about .car")
gsap.to(car,{
    x:1000,
    y:400,
    scrollTrigger:{
        trigger:".about",
        scroller : "body",
        // markers : true,
        // pin:true,
        start : "top 10%",
        end:"top -50%",
        scrub : 2
    }
})

const page2 = document.querySelector(".page2")
const body = document.querySelector("body")

window.addEventListener("wheel",(dets)=>{
    if (dets.deltaY>=0) {
        gsap.to(".scroller .scroll",{
            transform : "translateX(-200%)",
            duration : 2,
            ease : "none"
        })
        gsap.to(".scroll i",{
            rotate : 180
        })
    } else {
        gsap.to(".scroller .scroll",{
            transform : "translateX(00%)",
            duration : 4,
            ease : "none"
        })
        gsap.to(".scroll i",{
            rotate : 0
        })
    }
})

const text = document.querySelector(".page2 h1")
let textcont = text.textContent;
// console.log(textcont)

let splittedText = textcont.split("")
console.log(splittedText);

let flag = ""

splittedText.forEach((e)=>{
    flag += `<span class="a">${e}</span>`
})

// console.log(flag)

text.innerHTML = flag

gsap.from(".page2 h1 span",{
    y : 50,
    duratin : 1,
    stagger : 0.2,
    scrollTrigger : {
        trigger : ".page2 h1 span",
        scroller : "body",
        // markers : true,
        start : "top 50%",      
    }
})