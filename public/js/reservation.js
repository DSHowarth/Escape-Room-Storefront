const resModal = document.getElementById('resModal')

// element pointers for 'logged in' state
const modalBody = document.getElementById('modalBody')
const partyCountForm = document.getElementById('partyCountForm')
const confirm = document.getElementById('resConfirm')
const modalBodyInput = document.getElementById('resDateTime');

// element pointers for 'not logged in' state
const login = document.getElementById('resLogin')
const signUp = document.getElementById('resSignUp')

// Reservation submission via modal 'confirm' button
partyCountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (Number(myInput.value) && myInput.value <= 5){
        myInput.classList.remove('is-invalid')
        myInput.classList.add('is-valid')
    
      }
      else {
        myInput.classList.remove('is-valid')
        myInput.classList.add('is-invalid')
      }
  }, false)

// Dynamically create prompt info from the user's button press
resModal.addEventListener('show.bs.modal', event => {
    console.log('into dynamic function')
    const button = event.relatedTarget;


    //get the time and date
    const resDate = button.parentNode.querySelector('.resDate').innerHTML;
    const time = button.innerHTML;

    console.log('time is ' + time)
    console.log('resDat is ' + resDate)

    modalBodyInput.innerHTML = 'Book a reservation for ' + resDate + ' ' + time + '?';
})
