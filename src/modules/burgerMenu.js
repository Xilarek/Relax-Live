const burgerMenu = () => {
    const body = document.querySelector('body'),
        menuBtn = body.querySelector('.menu__icon'),
        popUpMenu = document.querySelector('.popup-dialog-menu'),
        popUpMenuNav = document.querySelector('.popup-menu-nav'),
        closeMenu = popUpMenu.querySelector('.close-menu');
  
    const closeBurger = () => popUpMenu.style.transform = 'translate3d(645px,0,0)'; 
  
    
    popUpMenuNav.addEventListener('click', e => {
        const target = e.target;

        if (target.closest('.popup-menu-nav__item')) {
            closeBurger();
        }
    });

    body.addEventListener('click', e => {
        const target = e.target;
        
        if (target === menuBtn) {
            popUpMenu.style.transform = 'translate3d(0,0,0)';
        }

        if (target === closeMenu) {
            closeBurger();
        }

    });
    


};
export default burgerMenu;