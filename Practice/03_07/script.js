/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const Cup = {
    name: "People person", 
    color: "white",
    volume_oz: 14,
    pattern: "People holding hands",
    handle: true,
    liquid: {
    full: false 
  },
};

console.log("The cup is named", Cup.name); 
console.log ("Cup fill status", Cup.liquid.full); 