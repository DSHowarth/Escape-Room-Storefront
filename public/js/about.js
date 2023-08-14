const backgroundImg = document.getElementById('backgroundImg');


let opacity = 0
const imgInterval = setInterval(() => {
    opacity += 0.025
    if(backgroundImg.style.opacity < .30){
        backgroundImg.style.opacity = opacity
    }
    else{
        console.log('clearinginterval')
        clearInterval(imgInterval)
    }
},1000)