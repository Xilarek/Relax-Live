const listPhoneNumber = () => {
    const arrow = document.querySelector('.header-contacts__arrow'),
          twoPhoneNumber = document.querySelector('.header-contacts__phone-number-accord a');
    
        arrow.addEventListener('click', () => {
            arrow.classList.toggle('arrow-active');
            twoPhoneNumber.classList.toggle('phone-number-active');
        });    
};
export default listPhoneNumber;