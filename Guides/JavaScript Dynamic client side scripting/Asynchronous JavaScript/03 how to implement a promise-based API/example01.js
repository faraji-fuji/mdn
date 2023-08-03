// Implementing and alarm() API

// wrapping setTimeout()
const output = document.querySelector("#output")
const button = document.querySelector("#set-alarm")

function setAlarm(){
    setTimeout(() => {
        output.textContent = "Wake up!";
    }, 10000);
}

button.addEventListener("click", setAlarm)


// The Promise() constructor
function alarm(person, delay){
    return new Promise((resolve, reject) => {
        if (delay < 0){
            throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() =>{
            resolve(`Wake up, ${person}!`);
        }, delay)
    })
}
