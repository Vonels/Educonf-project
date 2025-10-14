const bodyEl = document.body;

const backdropEl = document.querySelector('.register-modal-background');
const modalCloseBtns = document.querySelectorAll(
  '.register-modal__close-button, .register-modal-button'
);

const formEl = document.querySelector('.register-form__form');
const formSubmitBtn = document.querySelector('.register-form__button');

const burgerEl = document.querySelector('.header-button-menu');
const burgerbackEl = document.querySelector('.menu-drive');
const burgerCloseEl = document.querySelector('.button-close');

function toggleModal(open = null) {
  const isOpen =
    open !== null ? open : !backdropEl.classList.contains('is-open');

  backdropEl.classList.toggle('is-open', isOpen);
  bodyEl.style.overflow = isOpen ? 'hidden' : 'visible';
}

function toggleBurg(open = null) {
  const isOpen =
    open !== null ? open : !burgerbackEl.classList.contains('is-open');

  burgerbackEl.classList.toggle('is-open', isOpen);
  bodyEl.style.overflow = isOpen ? 'hidden' : 'visible';
}

if (formEl && backdropEl) {
  formEl.addEventListener('submit', e => {
    e.preventDefault();

    if (formEl.checkValidity()) {
      toggleModal(true);
      formEl.reset();
    } else {
      formEl.reportValidity();
    }
  });
}

modalCloseBtns.forEach(btn =>
  btn.addEventListener('click', () => toggleModal(false))
);

if (burgerEl && burgerCloseEl) {
  burgerEl.addEventListener('click', () => toggleBurg(true));
  burgerCloseEl.addEventListener('click', () => toggleBurg(false));
}
