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

const confirmReservation = async function (resDate, resTime) {
  try{
    // send a new reservation to database
    const postResponse = await fetch('/api/reservations', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // body has to be stringified as it will automatically be parsed by our middleware
      body: JSON.stringify({
        date: resDate + ' ' + resTime,
        party_size: partyInput.value
      })
    })
    // if successful, redirect to profile page
    window.location = './profile'
  } catch {
    modalBody.innerHTML += `<p class="text-danger"> An unexpected error has occured. Please try again later.</p>`
  }
}

// declare global variables so different event listers can assign and use them
let resDate;
let time;

// only triggers on a 'logged in' state
if (partyCountForm){
  // Dynamically create prompt info from the user's button press
  resModal.addEventListener('show.bs.modal', event => {
      const button = event.relatedTarget;

      //get the time and date
      resDate = button.parentNode.querySelector('.resDate').innerHTML;
      time = button.innerHTML;

      modalBodyInput.innerHTML = 'Book a reservation for ' + resDate + ' @ ' + time + '?';



  })
  // Reservation submission via modal 'confirm' button
  partyCountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    // confirms the party size input is valid
    if (Number(partyInput.value) && partyInput.value <= 5){
        partyInput.classList.remove('is-invalid')
        partyInput.classList.add('is-valid')
        try{
          confirmReservation(resDate, time);
        } catch (err) {
          console.log(err)
        }
      }
      //if not valid, let the user know
      else {
        partyInput.classList.remove('is-valid')
        partyInput.classList.add('is-invalid')
      }
  }, false)

}

// only triggers in 'logged out' state
else {
  login.addEventListener('click', (event) => {
    window.location = './login'
  })

  signUp.addEventListener('click', (event) => {
    window.location = './signup'
  })
}