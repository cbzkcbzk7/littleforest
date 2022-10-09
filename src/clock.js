const clock = document.querySelector(".status-bar__clock");


function handleClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
 

    clock.innerText = `${hours}:${min}`;
}

setInterval(handleClock,1000);