// selects all the cancel buttons
const cancelBtns = document.querySelectorAll('.cancel-button')

// map through cancel buttons to extract res id
const reservIds = cancelBtns.map((cancelBtn) => cancelBtn.getAttributes('data-resId'))

// for each reservation create a qr code
for(let i = 0; i < reservIds.length; i++){
    // selects the div with qr code
    const qrCodeEl = document.getElementById(reservIds[i])
    const qrcode = new QRCode(qrCodeEl, {width: 100, height: 100})
    qrcode.makeCode(qrCodeEl.textContent)
}