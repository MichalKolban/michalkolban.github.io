const animationArrow = document.querySelector('.animationArrow');
const upArrow = document.querySelector('.uparrow');
const docHeight = document.body.scrollHeight

const typingTxt = document.querySelector('.text');
const underscoreTxt = document.querySelector('.underscore');

const showText = "Design, Create, Deploy";

window.addEventListener("scroll", function(event){
    let scroll = this.scrollY;

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
    document.documentElement.scrollTop = 0;
});

const underscoreAnimation = () => {
    underscoreTxt.classList.toggle('activeunderscore');
}

setInterval(underscoreAnimation, 500);

let typingIndex = 0;

const typingAnimation = () => {
    if (typingIndex >= 0) {
        if (typingIndex === showText.length) {
            return setTimeout(() => {
                typingIndex = -1;
                typingTxt.textContent = '';
            }, 1500);
        }
        typingTxt.textContent += showText[typingIndex];
    }
    typingIndex++;
    }
    
setInterval(typingAnimation, 100);
