const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 4000); // 4 seconds = 4000 milliseconds
});

console.log("Promise created, waiting 4 seconds...");

myPromise
    .then(result => {
        console.log("Promise resolved with:", result);
    })
    .catch(error => {
        console.log("Promise rejected with:", error);
    });