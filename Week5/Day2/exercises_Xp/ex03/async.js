const fetching_data = async () => {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (response.ok)
        {
            const resData = await response.json();
            console.log(resData.result);
        }
        else
            console.error("Error occured");
        
    } catch (error) {
        console.error(error);
    }
}

fetching_data()