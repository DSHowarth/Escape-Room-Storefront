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
    if(passwordIn.value != passwordConfirm.value){
        // end the function if they don't match
        alert('your password must match with confirm')
        return;
    }

    // construct a body object for fetch request
    const bodyObj = {
        username: usernameIn.value.trim(),
        email: emailIn.value.trim(),
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

    // if every thing went well
    if(response.ok){
        // redirect the user to home page
        window.location.href = '/'
    }else {
        alert('well something went wrong')
        const json = await response.json()
        console.log(json)
    }

})