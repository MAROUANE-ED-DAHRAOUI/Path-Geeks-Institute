function compareToTen(num){
    return new Promise((resolve, reject) => {
        if(num <= 10)
        {
            resolve("Resolved is the number less from 10")
        }
        else if(num > 10)
        {
            reject("rejected is the number greated from 10")
        }
    })
}

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))
