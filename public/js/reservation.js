const resModal = document.getElementById('resModal')


const modalBody = document.getElementById('modalBody')
const partyCountForm = document.getElementById('partyCountForm')
const confirm = document.getElementById('resConfirm')


const login = document.getElementById('resLogin')
const signUp = document.getElementById('resSignUp')

// Reservation submission via modal 'confirm' button
partyCountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
    // if(!partyCountForm.checkValidity())
    if ((myInput.value > 5)){
      myInput.classList.remove('is-valid')
      myInput.classList.add('is-invalid')
    }
    else {
      myInput.classList.remove('is-invalid')
      myInput.classList.add('is-valid')
    }
  }, false)