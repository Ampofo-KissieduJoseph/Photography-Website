
// Change NAV Style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})


//CONTACT BUTTONS circular text buttons
const textButtons = document.querySelectorAll('.contact__btn');
textButtons.forEach(textButtons => {  
    let text = textButtons.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => 
    `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('');
})


//Swiper js Gallery Section
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60,
        }
    }
  });

// responsive nav bar/menu bar

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__open__toggle');
const closeNavBtn = document.querySelector('#nav__close__toggle');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display ='none';
    closeNavBtn.style.display = 'inline-block';
}
openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}
closeNavBtn.addEventListener('click', closeNav);

if(document.body.clientwidth < 1024){
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav)
    })
}
