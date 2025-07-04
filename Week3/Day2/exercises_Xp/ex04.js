const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

//2-> Console.log the number of floors in the building.
console.log(building.numberOfFloors);

//3-> Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor + 
            building.numberOfAptByFloor.thirdFloor);

// 4-> Console.log the name of the second tenant and the number of rooms he has in his apartment. 
const secondTenant = building.nameOfTenants[1].toLocaleLowerCase();
console.log(`${building.nameOfTenants[1]} has ${building.numberOfRoomsAndRent[secondTenant][0]} rooms in his apartment.`);


// 5-> Console.log the name of the second tenant and the number of rooms he has in his apartment. 
const sarah = building.numberOfRoomsAndRent.sarah[1];
const David = building.numberOfRoomsAndRent.david[1];
const dan = building.numberOfRoomsAndRent.dan[1];

if(sarah + David > dan)
{
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
