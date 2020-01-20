//#1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];

var count = 0;
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        count++;
    }
}
console.log("We found " + count + " computers.");

//#2
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Let him in.")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. Do not let HIM in!")
        }
    }
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Let her in.")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. Do not let HER in!")
        }
    }
};


//#Optional Bonus Challenge

var stuff = [9, 3, 4, 2]; 

var isLightOn = false;
for (var i = 0; i < stuff.length; i++) {
    for (var x = 0; x < stuff[i]; x++) {
        if (isLightOn === false) {
            isLightOn = true;
        } else {
            isLightOn = false;
        }
    }
}

if(isLightOn){
    console.log("The light is on.")
}else{
    console.log("The light is off.")
}

