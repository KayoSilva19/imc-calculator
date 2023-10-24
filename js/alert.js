export const Alert = {
  element: document.querySelector('.alert-error'),
  
  showsAndDisappears() {
    Alert.element.classList.add('open')  
    setTimeout(Alert.disappears, 1500)
  }, 
  disappears() {
    Alert.element.classList.remove('open')  
  }
}