fetch("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    .then((response)=>{
        return response.json();
    })
    .then((obj) => console.log(obj))
    .catch((error)=>console.error(error.message));