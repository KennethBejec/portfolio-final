let btn_display = document.querySelectorAll('.inside-details button')
let details = document.querySelectorAll('.full-details')
let btn_hide = document.querySelectorAll('.full-details button')
btn_display.forEach((element, index)=>{
    element.onclick = () =>{
        details[index].style.transform = 'translateX(0%)'
    }
})
btn_hide.forEach((element, index)=>{
    element.onclick = () =>{
        details[index].style.transform = 'translateX(300%)'
    }
})
