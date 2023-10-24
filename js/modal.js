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
  show() {   
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
    handleReset()
  }
}

Modal.btnClose.addEventListener('click', Modal.close)

function handleReset() {
  inputWeight.value = ''
  inputHeight.value = ''
}

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event) {
  if(event.key === 'Escape') {
    Modal.close()
  }
}