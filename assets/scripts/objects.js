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

// dynamically access by []

const keyname='first name';
// console.log(personData.keyname);
// by []
console.log(personData[keyname])

// dynamic feature is 
const userChosenOne='level';

let person1={
    'first name':'Mohammed',
    'last name':'Azim',
    age:21,
    [userChosenOne]:"...",
    1:"hello"

}

// THe Object Spread Operator {...}

const person2={
    name:'Azim',
    age:18,
    hobbies:['Sports','cooking']
};

console.log(person2);

const person3={...person,age:21,hobbies:[...person2.hobbies]}; //making new object with overwritting and new refrence

console.log(person3);
console.log(person2);

//  CREATING NEW OBGECT WITH Object.assign({},object);

const guy={name:"Azim"};

const newPerson=Object.assign({},guy);

guy.name="Mohammed Azim";
console.log(guy);
console.log(newPerson);
