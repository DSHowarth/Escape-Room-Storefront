const resModal = document.getElementById('resModal')

// element pointers for 'logged in' state
const modalBody = document.getElementById('modalBody')
const partyCountForm = document.getElementById('partyCountForm')
const confirm = document.getElementById('resConfirm')
const modalBodyInput = document.getElementById('resDateTime');
const partyInput = document.getElementById('partyCount')

// element pointers for 'not logged in' state
const login = document.getElementById('resLogin')
const signUp = document.getElementById('resSignUp')


// Dynamically create prompt info from the user's button press
if (modalBodyInput){
resModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget;


    //get the time and date
    const resDate = button.parentNode.querySelector('.resDate').innerHTML;
    const time = button.innerHTML;


    modalBodyInput.innerHTML = 'Book a reservation for ' + resDate + ' @ ' + time + '?';
})


// Reservation submission via modal 'confirm' button
partyCountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (Number(partyInput.value) && partyInput.value <= 5){
        partyInput.classList.remove('is-invalid')
        partyInput.classList.add('is-valid')
    
      }
      else {
        partyInput.classList.remove('is-valid')
        partyInput.classList.add('is-invalid')
      }
  }, false)
}