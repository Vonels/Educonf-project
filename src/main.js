const modalBtnEl = document.querySelector('.register-form__button');
const backdropEl = document.querySelector('.register-modal-background');
const closeBtnSvg = document.querySelector('.register-modal__close-button');
const closeBtnEl = document.querySelector('.register-modal-button');
const bodyEl = document.body;

modalBtnEl.addEventListener('click', toggleModal);
closeBtnSvg.addEventListener('click', toggleModal);
closeBtnEl.addEventListener('click', toggleModal);

function toggleModal() {
  backdropEl.classList.toggle('is-open');

  if (backdropEl.classList.contains('is-open')) {
    bodyEl.style.overflow = 'hidden';
  } else {
    bodyEl.style.overflow = 'visible';
  }
}
