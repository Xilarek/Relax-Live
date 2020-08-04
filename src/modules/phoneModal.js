const phoneModal = () => {
    const phoneBlock = document.querySelector('.header'),
        phoneNumberWrap = phoneBlock.querySelector('.header-contacts__phone-number-wrap'),
        phoneNumberAccord = phoneBlock.querySelector('.header-contacts__phone-number-accord');
        phoneNumberWrap.style.overflow = 'visible';
        phoneNumberAccord.style.display = 'block';
        
        
};

export default phoneModal;