// Selects all the cancel buttons and converts the NodeList to an array
const cancelBtns = Array.from(document.querySelectorAll('.cancel-button'));

// Map through cancel buttons to extract res id
const reservIds = cancelBtns.map((cancelBtn) => cancelBtn.getAttribute('data-resId'));

// for each reservation create a qr code
for(let i = 0; i < reservIds.length; i++){
    // selects the div with qr code
    const qrCodeEl = document.getElementById(reservIds[i])

    // create a qrcode 
    const qrcode = new QRCode(qrCodeEl, {width: 100, height: 100})
    qrcode.makeCode(qrCodeEl.textContent)
}

