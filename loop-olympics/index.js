//uncomment where necessary under exercise number

//----------------PRELIMINARIES--------------

//1
// for (var i = 1; i <= 9; i++) {
//     console.log(i);
// };

//2
// for (var i = 9; i >= 0; i--) {
//     console.log(i);
// }

//3
// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// };

//-----------------BRONZE MEDAL------------------

//1
// var numArr = [];
// for (var i = 0; i <= 9; i++) {
//     numArr.push(i);
// };
// console.log(numArr);

//2
// for (var i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     };
// };

//3
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// var newArr = [];
// for (var i = 0; i < fruit.length; i++) {
//     if(i%2===0){
//         newArr.push(fruit[i]);
//     }
// };
// console.log(newArr);

//----------------SILVER MEDAL-------------------------

var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

//1
// for (var i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name);
// };

//2
// var names = [];
// var occupations = [];
// for (var i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation);
// };
// console.log(names);
// console.log(occupations);

//3
// var otherNames = [];
// var otherOccupations = [];
// for (var i = 0; i < peopleArray.length; i++) {
//     if (i % 2 === 0) {
//         otherNames.push(peopleArray[i].name);
//     } else {
//         otherOccupations.push(peopleArray[i].occupation);
//     };
// }
// console.log(otherNames);
// console.log(otherOccupations);

//------------------------GOLD MEDAL----------------------------

//1
//var goldFirstArr = [[], [], []];
// var num = 0;
// for (var i = 0; i < 3; i++) {
//     for (var x = 0; x < 3; x++) {
//         goldFirstArr[i].push(num);
//     }
// }
// console.log(goldFirstArr);

//2
// var goldSecondArr = [[], [], []];
// var helper = 0;
// for (var i = 0; i < 3; i++) {
//     for (var x = 0; x < 3; x++) {
//         goldSecondArr[i].push(helper);
//     }
//     helper++;
// };
// console.log(goldSecondArr);

//3
// var goldThirdArr = [[], [], []];
// for (var i = 0; i < 3; i++) {
//     var helper = 0;
//     for (var x = 0; x < 3; x++) {
//         goldThirdArr[i].push(helper);
//         helper++;
//     }
// }
// console.log(goldThirdArr);

//4
// var goldFourthArr = [[], [], []];
// for (var i = 0; i < 3; i++) {
//     for (var x = 0; x < 3; x++) {
//         goldFourthArr[i].push("x");
//     }
// }
// console.log(goldFourthArr);