import { Modal } from "./modal.js";
import { Alert } from './alert.js';
import { calculateIMC, notIsNumber } from "./utils.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (e) {
  e.preventDefault();
  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrheightIsNotANumber = notIsNumber(weight) || notIsNumber(height)

  if (weightOrheightIsNotANumber) {
      Alert.showsAndDisappears()
     return
  }

  const result = calculateIMC(weight, height)
  Modal.editMessage(result)
  Modal.show()
}