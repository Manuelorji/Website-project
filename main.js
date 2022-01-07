//change the background of the nav onscroll
const nav = document.querySelector('nav');
const navLink = document.getElementsByClassName('nav-link');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');




window.onscroll = function(){
    let top = window.scrollY;
    if(top>=50){
        nav.classList.add('active') 
        for (let i = 0; i < navLink.length; i++){
            navLink[i].style.color = '#fff'; 
            menuBtn.style.stroke = '#fff';        
        }
    }else{
        nav.classList.remove('active')
        for (let i = 0; i < navLink.length; i++){
            navLink[i].style.color = '#000'; 
            menuBtn.style.stroke = '#000';            
        }
    }
}

//hamburger

menuBtn.addEventListener('click', ()=>{
    mobileMenu.classList.add('show');
    document.body.style.overflow = 'hidden'
})

closeBtn.addEventListener('click', ()=>{
    mobileMenu.classList.remove('show');
    document.body.style.overflow = 'unset'

})

