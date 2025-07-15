function displayStudentInfo(objUser){
    //destructuring
    const {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`);
    //returning the full name
    return `${first} ${last}`;
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


