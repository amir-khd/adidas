const btnSearch = document.querySelector('.search-icon');
const overlay = document.querySelector('.search-overlay');
const popUp = document.querySelector('.search-popup');
const closePopUp = document.querySelector('.close');
const vMenu = document.querySelector('hamburger');
const vLink = document.querySelector('.menu');




btnSearch.addEventListener('click' ,function(){
    overlay.classList.add('active');
    popUp.classList.add('active');
    document.querySelector('body').classList.add('overflow-hidden');
});


overlay.addEventListener('click', function(){
    overlay.classList.remove('active');
    popUp.classList.remove('active');
    document.querySelector('body').classList.remove('overflow-hidden')
})

closePopUp.addEventListener('click', function(){
    overlay.classList.remove('active');
    popUp.classList.remove('active');
    document.querySelector('body').classList.remove('overflow-hidden')
})
