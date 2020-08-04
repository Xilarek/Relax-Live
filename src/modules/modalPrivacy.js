const modalPrivacy = () => {
    const linkPrivacy = document.querySelectorAll('.link-privacy'),
          modal = document.querySelector('.popup-privacy');
    
    const closeModal = () => {
        modal.style.visibility = 'hidden';
    }

    linkPrivacy.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.visibility = 'visible';
        });
    });

    modal.addEventListener('click', e => {
        const target = e.target;
        if (target === modal) {
            closeModal();
        }

        if (target === target.closest('.close')){
            closeModal();
        }
    });

}
export default modalPrivacy;