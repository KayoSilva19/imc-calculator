const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


const Modal = {
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

form.onsubmit = function (e) {
  e.preventDefault();
  const weight = inputWeight.value
  const height = inputHeight.value

  const result = calculateIMC(weight, height)
  Modal.editMessage(result)
  Modal.showModal()
}

function calculateIMC(weight, height) {
  let resultImc = (weight / ((height / 100) ** 2)).toFixed(2)
  
  return resultImc
}

