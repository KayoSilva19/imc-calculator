export function notIsNumber(value) {
  return isNaN(value) || value === ''
}

export function calculateIMC(weight, height) {
  let resultImc = (weight / ((height / 100) ** 2)).toFixed(2)
  
  return resultImc
}

