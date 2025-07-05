function Is_Blank(string)
{
    if(string === null || string === undefined || string.trim("") === "")
    {
        return true;
    }
    return false;
}

console.log(Is_Blank(''));
console.log(Is_Blank('abc'));
