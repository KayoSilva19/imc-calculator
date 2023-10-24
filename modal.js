const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  btnClose: document.querySelector('.close'),
  message: document.querySelector('.modal h2'),

  editMessage(imcResult) {
    const messageModal = `Seu IMC é ${imcResult}` 
    Modal.message.innerText = messageModal
  },
  showModal() {   
    Modal.wrapper.classList.add('open')
  },
  closeModal() {
    Modal.wrapper.classList.remove('open')
    handleReset()
  }
}

Modal.btnClose.addEventListener('click', Modal.closeModal)

function handleReset() {
  inputWeight.value = ''
  inputHeight.value = ''
}