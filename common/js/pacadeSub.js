const buttons = document.querySelectorAll(".pcd-button")

buttons.forEach(function(el,i){
    el.addEventListener("click",function(){
        let number = this.getAttribute('data-button-number')
        let slide = document.getElementById(`slide${number}`)
        if(!this.classList.contains("off")){
            this.classList.add("off")
            slide.classList.add("off")
            thisSW = false;
        }else if(this.classList.contains("off")){
            this.classList.remove("off")
            slide.classList.remove("off")
            thisSW = true;
        }
        console.log(number)
    })
})

const scrollList = document.querySelectorAll(".subPacade--main-text-link-row")
const scrollTarget = document.querySelectorAll(".scroll-target")
scrollList.forEach(function(el,i){
    el.addEventListener("click",function(){
        let scrollTo = scrollTarget[i - 1].offsetTop - 140;
        window.scrollTo({left:0,top:scrollTo,behavior:"smooth"})
    })
})

const copyLinkButton = document.getElementById("copyLinkButton")
const url = window.document.location.href;
copyLinkButton.addEventListener("click",function(){
    var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	console.log("URL이 복사되었습니다.")
})

const newsTitle = document.querySelectorAll(".subPacade--news-item-text1")
newsTitle.forEach(function(el,i){
    let text = el.innerHTML;
    let length = text.length;
    let textCut = 18;
    if(length>textCut){
        el.innerHTML = text.substring(0,textCut) + "..."
    }
})