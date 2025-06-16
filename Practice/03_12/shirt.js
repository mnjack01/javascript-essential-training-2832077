/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Shirt {
  constructor(name, size, color, material, pocketNum, cost, condition, fit) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.material = material;
    this.pocketNum = pocketNum;
    this.cost = cost;
    this.condition = condition;
    this.fit = fit;
  }
  changeColor(newColor) {
    this.color = newColor;
  }
  changeMaterial(newmMaterial) {
    this.material = newmMaterial;
  }
}

export default Shirt;
