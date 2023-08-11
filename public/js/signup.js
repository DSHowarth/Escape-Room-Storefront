// setting dom selectors
const signupForm = document.getElementById('signup-form')
const usernameIn = document.getElementById('username')
const emailIn = document.getElementById('email')
const passwordIn = document.getElementById('password')
const passwordConfirm = document.getElementById('password-confirm')

// setting event listeners for form
signupForm.addEventListener('submit', async function(event){
    event.preventDefault()

    // check if the password matches the confirm password
    

    // construct a body object for fetch request
    const bodyObj = {
        username: usernameIn.value,
        email: emailIn.value,
        password: passwordIn.value
    }

    // fetch request to create a new user
    const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObj)
    })

    

})