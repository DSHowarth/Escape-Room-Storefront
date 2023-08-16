const logoutBtn = document.querySelectorAll('.logout')

for(let i = 0; i < logoutBtn.length; i++){
    logoutBtn[i].addEventListener('click', async function(event){
        // logs out the user using fetch request
        const response = await fetch('/api/users/logout', {
            method: 'POST'
        })
    
        if(response.ok){
            // sends the user back to the homepage
            window.location.href = '/'
        }else {
            alert('something went wrong')
        }
    })

}