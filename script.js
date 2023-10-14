let body = document.querySelector('body');
let navList = document.querySelector('.list-nav');
body.addEventListener('click', (e)=>{
   e.target.classList.contains('icon-bar') ? navList.classList.toggle('list-nav') : navList.classList.add('list-nav');
})

let icon_profil = document.querySelector('div.icon-profil');
let aside = document.querySelector('aside');
icon_profil.addEventListener('click', ()=>{  
   aside.style = 'right: 20px !important';
})


const hide = document.querySelector('.x')
let x = window.matchMedia("(max-width: 1200px)")
   myFunction(x)
   x.addListener(myFunction)
   function myFunction(x) {
      if (x.matches){
         aside.style = 'top : -300px !important'
         hide.addEventListener('click',()=>{
            aside.style = 'top: -300px !important'
         })         
         icon_profil.style = 'display: block';
      } else aside.style = 'top : 120px !important'
}


let nav_a = document.querySelectorAll('nav ul li a');
let section = document.querySelectorAll('main .content>article');

let currentSection = 'home';

window.addEventListener('scroll', () => {
   section.forEach(section => {
      if(window.scrollY >= (section.offsetTop - section.clientHeight / 2)) {
         currentSection = section.id;
      }
   });

   nav_a.forEach(nav_a => {
      if(nav_a.href.includes(currentSection)) {
         document.querySelector('.active').classList.remove('active');
         nav_a.classList.add('active');
      }
   })
})


