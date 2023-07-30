// chaining promies
// implementation with chaining
const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

// promise chaining
fetchPromise
    .then((response) => response.json())
    .then((data) => console.log(data[0].name))