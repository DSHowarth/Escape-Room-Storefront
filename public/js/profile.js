// Selects all the cancel buttons and converts the NodeList to an array
const cancelBtns = Array.from(document.querySelectorAll('.cancel-button'));

// Map through cancel buttons to extract res id
const reservIds = cancelBtns.map((cancelBtn) => cancelBtn.getAttribute('data-resId'));

// selects all cancel Buttons
const cancelBtnEls = document.querySelectorAll('.cancel-button')

// selects all delete buttons
const delButtons = document.querySelectorAll('.delete-button')

// for each reservation create a qr code
for(let i = 0; i < reservIds.length; i++){
    // selects the div with qr code
    const qrCodeEl = document.getElementById(reservIds[i])

    // create a qrcode 
    const qrcode = new QRCode(qrCodeEl, {width: 100, height: 100})

    qrcode.makeCode(qrCodeEl.getAttribute('data-qrCode'))

}

// triggered when the cancel button is hit
const handleCancel = async function(event){
    // retrieves reservation id from the data attr
    const resId = event.target.getAttribute('data-resId')

    try{
        // sends a delete request to the server
        const response = await fetch(`/api/reservations/${resId}`, {
            method: 'DELETE'
        })

        if(response.ok){

            // replaces accordion text to say this reservation has been canceled
            const accordionBody = document.getElementById(`accordion${resId}`)
            accordionBody.innerHTML = "<h4 class='text-danger'>This Reservation has been canceled</h4>"
            
        }else {
            const json = await response.json()
            console.log(json)
        }

    }catch(error){
        console.log("Error while trying to fetch", error)
    }

}

// triggered when delete button is hit
const handleDelete = async function(event){
    // retrieves reservation id from the data attr
    const resId = event.target.getAttribute('data-resId')

    try{
        // sends a delete request to the server
        const response = await fetch(`/api/reservations/${resId}`, {
            method: 'DELETE'
        })

        if(response.ok){

            // replaces accordion text to say this reservation has been canceled
            const accordionBody = document.getElementById(`pastAco${resId}`)
            accordionBody.innerHTML = "<h4 class='text-danger'>This Reservation has been deleted</h4>"
            
        }else {
            const json = await response.json()
            console.log(json)
        }

    }catch(error){
        console.log("Error while trying to fetch", error)
    }

}

// add event listener to each buttons
cancelBtnEls.forEach(button => {
    button.addEventListener('click', handleCancel)
})

// add event listener to each delete buttons
delButtons.forEach(button => {
    button.addEventListener('click', handleDelete)
})