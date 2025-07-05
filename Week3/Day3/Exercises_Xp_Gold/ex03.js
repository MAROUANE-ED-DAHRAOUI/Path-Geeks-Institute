function SwapCharacters(str)
{
    // Convert the string to an array of characters
    let arr = str.split('');
    
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] >= 'A' && arr[i] <= 'Z') {
            // Convert uppercase to lowercase
            arr[i] = arr[i].toLowerCase();
        } else if(arr[i] >= 'a' && arr[i] <= 'z') {
            // Convert lowercase to uppercase
            arr[i] = arr[i].toUpperCase();
        }
    }
    return arr.join('');
}

console.log(SwapCharacters("GeeksForGeeks")); // Output: "gEEKSfORgEEKS"