const target = document.querySelectorAll('[data-animation]');
const animacao = 'animate'; 

// const debounce = function(func, wait, imediate) {
//     let timeout;
//     return function(...args) {
//         const context = this;
//         const later = function () {
//             timeout = null;
//             if(!imediate) func.aplly(context, args);
//         };
//         const callNow = imedi    ate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.aplly(context, args);
//     };
// };


function animacaoScroll() {
    const janela = window.pageYOffset + ((window.innerHeight * 3.2) / 4);
    target.forEach(function(item) {
        if((janela) > item.offsetTop) {
            item.classList.add(animacao);
        }   
    })
}   

animacaoScroll();

if(target.length) {
    window.addEventListener('scroll', function() {
        animacaoScroll();   
    })
}
