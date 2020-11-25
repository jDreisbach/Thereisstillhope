const navArrow = document.querySelector('.navArrow');
const header = document.querySelector('.header');
const text = document.querySelector('.c');
const etsy = document.getElementById('etsy');
const facebook = document.getElementById('facebook');
const insta = document.getElementById('insta');

text.style.visibility='hidden';

navArrow.addEventListener("click",  ()=>{
     header.style.animation = 'popOut ease 2s';
    
     text.style.animation = 'popUp ease 2s';
    
     Promise.all(
         header.getAnimations().map((animation)=>{
            text.style.visibility ='visible';
             return animation.finished;
         })
     ).then(()=>{
        text.getAnimations().map((animation)=>{
            
            return animation.finished
        });  
     }).then(()=>{
         return header.remove();
     }).catch((e)=>{
         console.log(e);
     });
});

etsy.addEventListener('mouseover', ()=>{
    etsy.style.opacity = .5;
});

etsy.addEventListener('mouseout', ()=>{
    etsy.style.opacity = 1;
});

etsy.addEventListener("click", ()=>{
    window.open('https://www.etsy.com/shop/thereisstillhopeshop', '_blank')
});

facebook.addEventListener('mouseover', ()=>{
    facebook.style.opacity = .5;
});

facebook.addEventListener('mouseout', ()=>{
    facebook.style.opacity = 1;
});

facebook.addEventListener("click", ()=>{
    window.open('https://www.facebook.com/thereisstillhopeshop/', '_blank')
});

insta.addEventListener('mouseover', ()=>{
    insta.style.opacity = .5;
});

insta.addEventListener('mouseout', ()=>{
    insta.style.opacity = 1;
});

insta.addEventListener("click", ()=>{
    window.open('https://www.instagram.com/thereisstillhopeshop/', '_blank')
});