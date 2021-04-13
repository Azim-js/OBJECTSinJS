//1. this is Global context outside of any function

function something(){...};
console.log(this);

//2. this in a function (non Arrow) ->called global context

function something1(){
    console.log(this);
}
something1();

// 3. this in a Arrow function called in global context

const something2=()=>{
    console.log(this);
}

something2();

//4. this in a method (non arrow) -called on an object

const person={
    name:'azim',
    greet:function(){
        console.log(this.name);
    }
}
person.greet();

//5. this in a Method (Arrow function )- called on an object

const person1 ={
    name:'Azim',
    greet:()=>{
        console.log(this.name);
    }
};
person1.greet();
