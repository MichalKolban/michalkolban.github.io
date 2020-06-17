const animationArrow = document.querySelector('.animationArrow');
const upArrow = document.querySelector('.uparrow');
const docHeight = document.body.scrollHeight

window.addEventListener("scroll", function(event){
    let scroll = this.scrollY;
    // console.log(scroll);

    if(scroll > 250){
        animationArrow.classList.add('hideAnimation');
    }

    if(scroll < 100){
        animationArrow.classList.remove('hideAnimation');
    }

    if(scroll > docHeight - 1000){
        upArrow.classList.remove('hideAnimation');
    }

    if(scroll < docHeight - 1000){
        upArrow.classList.add('hideAnimation');
    }

})

upArrow.addEventListener("click", function(){
    console.log("clisked");
    document.documentElement.scrollTop = 0;
});
