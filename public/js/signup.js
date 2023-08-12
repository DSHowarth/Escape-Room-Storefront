// setting dom selectors
const signupForm = document.getElementById('signup-form')
const usernameIn = document.getElementById('username')
const emailIn = document.getElementById('email')
const passwordIn = document.getElementById('password')
const passwordConfirm = document.getElementById('password-confirm')

// setting event listeners for form
signupForm.addEventListener('submit', async function(event){
    event.preventDefault()

    if (!emailIn.checkValidity()) {
        emailIn.classList.remove('is-valid');
        emailIn.classList.add('is-invalid');
    }
    // check if the password matches the confirm password
    if(passwordIn.value != passwordConfirm.value){
        console.log('made it into if')
        // end the function if they don't match
        passwordConfirm.classList.remove('is-valid');
        passwordConfirm.classList.add('is-invalid');
        return;
    }
    else if (passwordIn.value.length < 8) {
        console.log('made it into else if')
        passwordIn.classList.remove('is-valid');
        passwordIn.classList.add('is-invalid');
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
        const json = await response.json()
        document.getElementById('errMsg').innerHTML = json.message
    }

})