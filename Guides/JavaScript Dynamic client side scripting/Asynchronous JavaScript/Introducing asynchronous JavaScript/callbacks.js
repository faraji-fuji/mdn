// Callbacks
// A function that's passed into another function, with the expectations that
// the callback will be called at the appropriate time (like a webhook in APIs) 

// implementation with a series of asynchronous functions
function doStep1a(init){
    return init + 1;
}

function doStep2a(init){
    return init + 2;
}

function doStep3a(init){
    return init + 3;
}

function doOperation(){
    let result = 0;
    result = doStep1a(result);
    result = doStep2a(result);
    result = doStep3a(result);
    console.log(`result: ${result}`);
}

doOperation();


// implementation with callbacks
function doStep1(init, callback){
    const result = init + 1;
    callback(result);
}

function doStep2(init, callback){
    const result = init + 2;
    callback(result)
}

function doStep3(init, callback){
    const result = init + 3;
    callback(result);
}

function doOperation(){
    doStep1(0, (result1) => {
        doStep2(result1, (result2) => {
            doStep3(result2, (result3) => {
                console.log(`result: ${result3}`)
            });
        });
    });
}

doOperation();