let data = [{
    title:"Discover innovative ways to decorate",
    imgSrc:`url("/images/desktop-image-hero-1.jpg")`,
    content:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
},{
    title:"We are available all across the globe",
    imgSrc:`url("/images/desktop-image-hero-2.jpg")`,
    content:`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`,
},{
    title:"Manufactured with the best materials",
    imgSrc:`url("/images/desktop-image-hero-3.jpg")`,
    content:`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`
}];
const hamburger = document.querySelector(".nav__hamburger");
const overlay = document.querySelector(".overlay");
const textTitle = document.querySelector(".article__title");
const textArticle = document.querySelector(".article__text");
const main = document.querySelector(".main");
const prev = document.querySelector(".btns__prev");
const next = document.querySelector(".btns__next");
const prevDesktop = document.querySelector(".btnsDesktop__prev");
const nextDesktop = document.querySelector(".btnsDesktop__next");
let i = 0;


const fillContent = i => {
    textTitle.innerText = data[i].title;
    textTitle.classList.add("fade-in");
    setTimeout(()=>{
        textTitle.classList.remove("fade-in");
    },500);

    textArticle.classList.add("fade-in");
    textArticle.innerText = data[i].content;
    setTimeout(()=>{
        textArticle.classList.remove("fade-in");
    },500)

    main.classList.add("opacity-in")
    setTimeout(()=>{
        main.style.backgroundImage = data[i].imgSrc;
    },100)
    setTimeout(()=>{
        main.classList.remove("opacity-in");
    },500);
}


const fadeInOrOut = div => {

    if(div.classList.contains("fade-in")){ // close animation
        div.classList.remove("fade-in");
        div.classList.add("fade-out");
        
    } else {
        div.classList.remove("fade-out"); // open animation
        div.classList.add("fade-in");
        
    }

}

const fadeOverlay = () => {
    fadeInOrOut(overlay);
    if(overlay.classList.contains("fade-in")){
        document.querySelector("body").style.overflow="hidden";
    } else {
        document.querySelector("body").style.overflow="visible";
    }
}

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("open");
    fadeOverlay();
})

window.addEventListener('DOMContentLoaded', () => {
    fillContent(0);

});

const increaseI = () => {
    i++;
    if(i>2){
        i=0;
    }
    fillContent(i);
}

const decreaseI = () => {
    i--;
    if(i<0){
        i=2;
    }
    fillContent(i);
}

next.addEventListener("click",increaseI);
nextDesktop.addEventListener("click",increaseI);

prev.addEventListener("click",decreaseI);
prevDesktop.addEventListener("click",decreaseI);

console.log("Made by Michal Choma");



