const person={
    name:"Azim",
    age:"21",
    hobbies:["Football","cooking","coding"],
    greet:function(){
        alert("Hi my Name is Azim");
    }
};

person.greet();  //is a method() in object
console.log(person.name) //is a member variable with string value

// addding to the object 

person.isAdmin=true;

console.log(person);

// modifying the object

person.age='31';
person.isAdmin=false;

console.log(person);

// removing the property from object

delete person.age; //best way to free the property

// person.age=null; //only ressets the property value
// person.age=undefined //not recommended 

console.log(person);

// different types of properties 

const personData={
    'first name':'Mohammed',
    'last name':'Azim',
    age:21,
    1:"hello"
};
// order of property is sorted in number typr property
console.log(personData['first name']);
console.log(personData.age);
console.log(perosnData[1]);

// working example with node

const movieList=document.getElementById("movie-list");
movieList.style['background-color']="red";
// or
// movieList.style.backgroundColor="red";
movieList.style.display="block";
