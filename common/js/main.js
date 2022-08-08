const sect4EventButtons = document.querySelectorAll(".sect4--event-buttonItem")
const sect4EventImgs = document.querySelectorAll(".sect4--event-imgItem")

sect4EventButtons.forEach(function(el,i){
    el.addEventListener("click",function(){
        for(let button of sect4EventButtons){
            button.classList.remove("clicked")
        }
        for(let img of sect4EventImgs){
            img.classList.remove("on")
        }
        sect4EventImgs[i].classList.add("on")
        this.classList.add("clicked")
    })
    el.addEventListener("mouseenter",function(){
        this.classList.add("hovered")
    })
    el.addEventListener("mouseleave",function(){
        this.classList.remove("hovered")
    })
})

const sect5boardsTitle = document.querySelectorAll(".sect5--boards-top ul li")
const sect5boardsList = document.querySelectorAll(".sect5--boards-list")

sect5boardsTitle.forEach(function(el,i){
    el.addEventListener("click",function(){
        for(let button of sect5boardsTitle){
            button.classList.remove("on")
        }
        for(let list of sect5boardsList){
            list.classList.remove("on")
        }
        sect5boardsList[i].classList.add("on")
        this.classList.add("on")
    })
})

const sect5boardsName = document.querySelectorAll(".sect5--boards-text2")
sect5boardsName.forEach(function(el,i){
    let text = el.innerHTML;
    let length = text.length;
    let textCut = 12;
    if(length>textCut){
        el.innerHTML = text.substring(0,textCut) + "..."
    }
})

var swiper1 = new Swiper(".mainSwiper1", {
    slidesPerView: 1.25,
    spaceBetween: 10,
    navigation: {
      nextEl: ".main1-swiper-button-next",
      prevEl: ".main1-swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        480: {
            spaceBetween: 20,
            slidesPerView: 2.1,
        },
        767: {
          slidesPerView: 1.2,
        },
        // when window width is >= 480px
        1024: {
          slidesPerView: 2.1,
        },
        // when window width is >= 640px
        1400: {
          slidesPerView: 3.1,
        }
      }
  });

gsap.set(".sect1--belt-item",{
    x:"-100%"
})
gsap.to(".sect1--belt-item",{
    duration:10,
    x:"0%",
    ease:"none",
    repeat:-1
})