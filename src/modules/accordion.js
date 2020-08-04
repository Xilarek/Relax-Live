const accordeon = () => {
    const accordeon = document.querySelector('.accordion'),
          tab = accordeon.querySelectorAll('ul li .title_block');


        const closeTabs = () => {
            tab.forEach(item => item.classList.remove('msg-active'));
        }

        closeTabs();

        accordeon.addEventListener('click', e => {
            const target = e.target;
            if (target !== target.closest('.title_block')){
                closeTabs();
            } else {
                target.classList.toggle('msg-active');
            }
        });
}

export default accordeon;