
const hamburger = document.querySelector(".hamburger-menu");
const navList = document.querySelector('.nav-list');
const contact = document.querySelector('.contact');

hamburger.addEventListener('click', () => {
    navList.classList.toggle ('change');

});

//                          CLICK TO REMOVE SIDE BAR

 document.querySelector('.nav-list').addEventListener('click', () => {
    navList.classList.remove('change')
 });

 document.querySelector('main').addEventListener('click', () => {
    navList.classList.remove('change');
  });
  
  document.querySelector('footer').addEventListener('click', () => {
    navList.classList.remove('change');
  });




