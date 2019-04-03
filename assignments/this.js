/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding:
`this` is the `window` or console object. In other words, `window` object is basically the browser window. 

* 2. Implicit Binding
 This is the type of `this` that is defined by whatever is to the left of the dot; this can be sometimes considered the type of binding that "happens automatically"

* 3. Explicit Binding
Explicit binding is when we use call or apply method in JS to explicitly define `this`

* 4. "new" Binding:
When we use a consructor, `this` will refer to the specific instance of the opbject that is created and returned by the constructor function, a function that returns an object.

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log("Principle 1: Global bind", this.name);

// Principle 2
// code example for Implicit Binding
const Arthur ={
    name: "Arthur",
    speak(){
        return `Hi! My name is ${this.name}`;
    }
}
console.log("Principle 2: Implicit Binding:", Arthur);
console.log(Arthur.speak());



// Principle 3
// code example for New Binding
function Person(name){
    this.name = name;

}

Person.prototype.introduce = function (){ 
    console.log(`My name is ${this.name}`);
};

const Linda = new Person('Linda');

console.log("Principle 3: new Binding")
Linda.introduce();

// Principle 4
// code example for Explicit Binding
function Robot(name,metal){
    Person.call(this,name);//explicit binding here
    this.metal = metal;
}

Robot.prototype.speak = function(){
    console.log (`I am ${this.name}, and I am made of ${this.metal}`)
}

console.log("Principle 3: Explicit Binding")
const Robbie = new Robot('Robbie','platinum');
Robbie.speak();