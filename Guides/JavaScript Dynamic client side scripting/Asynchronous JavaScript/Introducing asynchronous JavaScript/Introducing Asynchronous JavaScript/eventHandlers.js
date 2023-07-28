// asynchronous programming
// We need a way for our program to 
// 1. start a long-running operation by calling a function
// 2. Have the function start the operation and return immediately, so that
//    Our program can still be responsive to other events.
// 3. Notify us with the result of the operation when it eventually completes.


// event handlers
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
    log.textContent = "";

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("loadend", () => {
        log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
    });

    xhr.open(
        "GET",
        "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
    );

    xhr.send();

    log.textContent = `${log.textContent}Started XHR request\n`;
});


document.querySelector("#reloadB").addEventListener("click", () => {
    log.textContent = "";
    document.location.reload();
});
