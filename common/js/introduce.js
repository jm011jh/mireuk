const button01 = document.getElementById("button01")
const button02 = document.getElementById("button02")
const table01 = document.getElementById("table01")
const table02 = document.getElementById("table02")
const uniform = document.getElementById("uniform")
const pageTitle = document.getElementById("pageTitle")

button01.addEventListener("click",function(){
    button01.classList.add("on")
    button02.classList.remove("on")
    table02.classList.remove("on")
    table01.classList.add("on")
})
button02.addEventListener("click",function(){
    button01.classList.remove("on")
    button02.classList.add("on")
    table01.classList.remove("on")
    table02.classList.add("on")
})

var winTop = window.scrollY
const sect1 = document.getElementById("sect1")
const sect2 = document.getElementById("sect2")
const sect3 = document.getElementById("sect3")
const sect4 = document.getElementById("sect4")
const introList = document.querySelectorAll(".intro--header-wrap li")
const scrollPos = document.querySelectorAll(".scroll-position")
var sect1Top = Number(sect1.offsetTop)
var sect2Top = Number(sect2.offsetTop)
var sect3Top = Number(sect3.offsetTop)
var sect4Top = Number(sect4.offsetTop)
var pageTitleH = pageTitle.clientHeight
var uniformH = uniform.clientHeight
var upH = pageTitleH + uniformH
introList.forEach(function(el,i){
    el.addEventListener("click",function(){
        let scrollTo = scrollPos[i].offsetTop + upH;
        window.scrollTo({left:0,top:scrollTo,behavior:"smooth"})
    })
})
window.addEventListener("scroll",function(){
    winTop = window.scrollY - upH
    
    if(sect1Top < winTop && winTop < sect2Top){
        introList.forEach(function(el,i){
            introList[i].classList.remove("on")
        })
        introList[0].classList.add("on")
    }else if(sect2Top <= winTop && winTop < sect3Top){
        introList.forEach(function(el,i){
            introList[i].classList.remove("on")
        })
        introList[1].classList.add("on")
    }else if(sect3Top <= winTop && winTop < sect4Top){
        introList.forEach(function(el,i){
            introList[i].classList.remove("on")
        })
        introList[2].classList.add("on")
    }else if(sect4Top <= winTop){
        introList.forEach(function(el,i){
            introList[i].classList.remove("on")
        })
        introList[3].classList.add("on")
    }
    
})

const introMapButton = document.querySelectorAll(".intro--map-button")
introMapButton.forEach(function(el, _i){
    let parent = el.parentNode;
    el.addEventListener("click",()=>{
        if(!parent.classList.contains("off")){
            parent.classList.add("off")
        }else if(parent.classList.contains("off")){
            parent.classList.remove("off")
        }
    })
})

const naviScrollButton = document.querySelectorAll(".intro--navi-scroll-button")
naviScrollButton.forEach(function(el, _i){
    let parent = el.parentNode;
    el.addEventListener("click",function(){
        if(!parent.classList.contains("off")){
            parent.classList.add("off")
        }else if(parent.classList.contains("off")){
            parent.classList.remove("off")
        }
    })
})