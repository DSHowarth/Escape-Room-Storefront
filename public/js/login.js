// element selectors for 
const loginForm = document.getElementById('login-form')
const emailIn = document.getElementById('email')
const passwordIn = document.getElementById('password')

// setting up event listener
loginForm.addEventListener('submit', async function(event){
    event.preventDefault()

    // construct an object for the body
    const bodyObj = {
        email: emailIn.value.trim(),
        password: passwordIn.value
    }

    // fetch request to submit the form
    const response = await fetch('/api/users/login', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObj)
    })

    // if the response was 200 (ok)
    if(response.ok){
        // redirects the user to either to homepage, or to the profile page
        window.location.href = '/' // to homepage
    }else {
        // if response was not ok
        alert('Well something went wrong')
        const json = await response.json()
        console.log(json)
    }

})