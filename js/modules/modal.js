import { modalBox, openModal, closeModal } from '../utils/modalHelpers';

function modal() {
    const modalTrigger = document.querySelectorAll('[data-modal]');

    // add handlers to open modal
    modalTrigger.forEach((btn) => {
        btn.addEventListener('click', openModal);
    });

    // close modal
    modalBox.addEventListener('click', (evt) => {
        const target = evt.target;

        if (
            target &&
            (target.matches('[data-modal-close]') || target === modalBox)
        ) {
            closeModal();
        }
    });

    // close modal by 'Escape'
    document.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape' && modalBox.classList.contains('show')) {
            closeModal();
        }
    });

    // open modal by timeout
    // TODO: uncomment for switch Timer
    // const modalTimerId = setTimeout(toggleModal, 30000);

    // open modal by scroll to the end of page
    function onScrollModalOpen() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal();
            window.removeEventListener('scroll', onScrollModalOpen);
        }
    }

    window.addEventListener('scroll', onScrollModalOpen);
}

export default modal;
