const head = document.getElementById("head")
const aside = document.getElementById("aside")
const headOpenList = document.querySelectorAll(".head--open-list")
const headSubMenu = document.querySelector(".head--sub-menu")
const headSubMenuList = document.querySelectorAll(".head--sub-menu-list")
headOpenList.forEach(function(el,i){
    el.addEventListener("mouseenter",function(){
        headSubMenu.classList.add("on")
        for(list of headSubMenuList){
            list.classList.remove("on")
        }
        headSubMenuList[i].classList.add("on")
    })
})
const headSubCloseList = document.querySelector(".head--close-list")
headSubCloseList.addEventListener("mouseenter",function(){
    headSubMenu.classList.remove("on")
})
headSubMenu.addEventListener("mouseleave",function(){
    headSubMenu.classList.remove("on")
})

const asideRow = document.querySelectorAll(".aside--row2")
const asideRowButton = document.querySelectorAll(".aside--row2-button")
const asideRowSlide = document.querySelectorAll(".aside--row2-slide")
asideRowButton.forEach(function(el,i){
    let parent = el.parentNode;
    let thisSlide = parent.querySelector(".aside--row2-slide")
    console.log(thisSlide)
    el.addEventListener("click",function(){
        if(parent.classList.contains("on")){
            parent.classList.remove("on")
        }else{
            for(el of asideRow){
                el.classList.remove("on")
            }
            parent.classList.add("on")
        }
    })
})

const asideClose = document.getElementById("asideClose")
asideClose.addEventListener("click",function(){
    aside.classList.remove("on")
})

const headHam = document.getElementById("headHam")
headHam.addEventListener("click",function(){
    aside.classList.add("on")
    
})
