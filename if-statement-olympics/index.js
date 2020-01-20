//1
if (5 > 3) {
    console.log('is greater than');
};

//2
if ('cat'.length === 3) {
    console.log('is the length');
};

//3
if ('cat' === 'dog') {
    console.log('the same');
} else {
    console.log('not the same');
}

//Bronze1
var person={
    name:'Bobby',
    age:12
}
if(person.age>=18){
    console.log(person.name+" is allowed to go to the movie");
}else{
    console.log(person.name+ " is NOT allowed to go to the movie");
}

//Bronze2
if(person.name[0]==='B'){
    console.log(person.name+" is allowed to go to the movie");
}else{
    console.log(person.name+ " is NOT allowed to go to the movie");
}

//Bronze3
if(person.name[0]==='B'&&person.age>=18){
    console.log(person.name+" is allowed to go to the movie");
}else{
    console.log(person.name+ " is NOT allowed to go to the movie");
}

//Silver1
if(1==="1"){
    console.log("strict")
}else if(1=="1"){
    console.log("loose")
}else{
    console.log("not equal at all")
}

//Silver2
if(1<=2&&2==4){
    console.log("yes");
};

//Gold1
if(typeof("dog")==="string"){
    console.log("It is a string");
};

//Gold2
if(typeof("true")==="boolean"){
    console.log("Yes, it is a boolean value.");
}else{
    console.log("It is not a boolean");
};

//Gold3
if(typeof(mystery)!="undefined"){
    console.log("It is defined.")
}else{
    console.log("The variable is undefined for sure.")
}

//Gold4
if("s">12){
    console.log("Yes it is.")
}else{
    console.log("Not it is not greater.")
}

//Gold5
var myNum=10;
myNum% 2=== 0 ? console.log("Even") : console.log("Odd");
