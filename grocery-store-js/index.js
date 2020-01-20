var shopper = {
    name:'Edgars',
    age:'27',
    hasBeard:true,
    fullName:function(){
        return this.name+" "+this.age;
    },
    groceryCart:['potatoes','milk','eggs','beer']
}

console.log(shopper.fullName());