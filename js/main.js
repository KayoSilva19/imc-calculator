import { Modal } from "./modal.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (e) {
  e.preventDefault();
  const weight = inputWeight.value
  const height = inputHeight.value

  const result = calculateIMC(weight, height)
  Modal.editMessage(result)
  Modal.show()
}

function calculateIMC(weight, height) {
  let resultImc = (weight / ((height / 100) ** 2)).toFixed(2)
  
  return resultImc
}

