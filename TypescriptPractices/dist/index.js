"use strict";
let id = 5;
let company = "syncfusion";
let isCompanyOpen = false;
let x;
x = 10;
x = "sync";
let ids = [1, 2, 3, 4, 5];
ids.forEach(Element => console.log(Element));
let x1 = [1, "Sync", true];
let employee = [1, "sync", true];
let employees = [[1, "sync", true], [2, "sync", true]];
let empId;
empId = 24;
empId = "EMP24";
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 0] = "up";
    direction1[direction1["down"] = 1] = "down";
    direction1[direction1["left"] = 2] = "left";
    direction1[direction1["right"] = 3] = "right";
})(direction1 || (direction1 = {}));
console.log(direction1.up);
console.log(direction1.down);
console.log(direction1.left);
console.log(direction1.right);
var direction2;
(function (direction2) {
    direction2[direction2["up"] = 5] = "up";
    direction2[direction2["down"] = 6] = "down";
    direction2[direction2["left"] = 7] = "left";
})(direction2 || (direction2 = {}));
console.log(direction2.up);
console.log(direction2.down);
console.log(direction2.left);
var direction3;
(function (direction3) {
    direction3["up"] = "up";
    direction3["down"] = "down";
})(direction3 || (direction3 = {}));
console.log(direction3.up);
let User = {
    id: 1,
    name: "Sync"
};
let user2 = {
    id: 1,
    name: "sync"
};
let x3 = 5;
let comId = x3;
function doMath(a, b) {
    return a + b;
}
console.log(doMath(1, 2));
function logMe(x) {
    console.log(x);
}
logMe(5);
function doType(x) {
    if (typeof (x) === "number")
        console.log("x is Number");
    if (typeof (x) === "string")
        console.log("x is string");
}
doType(5);
doType("5");
let user1 = {
    id: 1,
    name: "sync"
};
user1.id = 5;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const person1 = new Person(1, "sync1");
const person2 = new Person(2, "sync2");
console.log(person1);
console.log(person2);
console.log(person1.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee(1, "sync1", "Developer");
console.log(emp1);
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let stringArray = getArray(["1", "2", "3"]);
