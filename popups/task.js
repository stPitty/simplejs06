const firstModal = window.modal_main;
let closed

setInterval(() => {
  if (!closed) {
    firstModal.classList.add('modal_active');
  }
}, 1000);

const close = Array.from(window.document.querySelectorAll('.modal__close_times'));

close.forEach(closeButton => {
  closeButton.onclick = () => {
    closeButton.closest('.modal').classList.remove('modal_active');
  }
})

const button = window.document.querySelector('.show-success');

button.onclick = () => {
  closed = true
  firstModal.classList.remove('modal_active');
  window.modal_success.classList.add('modal_active');
}