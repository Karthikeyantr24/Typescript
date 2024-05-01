//Basic Types
let id :number =5;
let company : string ="syncfusion";
let isCompanyOpen : boolean = false;

let x: any;
x=10;
x="sync";

let ids : number[] = [1,2,3,4,5];
ids.forEach(Element =>console.log(Element))
let x1: any[] = [1,"Sync",true];

//Tuple
let employee : [number,string,true] = [1,"sync",true];
//Tuple Array
let employees:[number,string,true][] = [[1,"sync",true],[2,"sync",true]];

//union
let empId : number|string ;
empId =24;
empId ="EMP24";

//Enum
enum direction1
{
    up,
    down,
    left,
    right
}
console.log(direction1.up);
console.log(direction1.down);
console.log(direction1.left);
console.log(direction1.right);

enum direction2
{
    up=5,
    down,
    left
}
console.log(direction2.up);
console.log(direction2.down);
console.log(direction2.left);

enum direction3
{
    up="up",
    down="down"
}
console.log(direction3.up);

//Object -1

let User : {id:number, name:string}={
    id : 1,
    name:"Sync"
}

//Object - 2
type userType={
    id:number,
    name:string
}

let user2 : userType={
    id:1,
    name:"sync"
}

//type assert
 let x3 : any=5
 let comId  = <number>x3;

 //function
 function doMath(a:number, b:number):number{
    return a+b
 }
 console.log(doMath(1,2))

 function logMe(x:string |number):void{
    console.log(x)
 }
 logMe(5)

 function doType(x:string|number):void{
    if(typeof(x)==="number") console.log("x is Number")
    if(typeof(x)==="string") console.log("x is string")
 }
doType(5)
doType("5")

//interfaces
interface userType1 {
    id:number,
    name:string
    age?:number //optional
}

let user1: userType1={
    id:1,
    name:"sync"
}
user1.id=5

//
interface mathFunc{
    (x:number, y:number):number
}

const add :mathFunc=(x:number,y:number) => x+y
const sub :mathFunc=(x:number,y:number) =>x-y

//class
interface personType{
    id:number,
    name:string,
    register(): string
}

class Person implements personType {
    id :number
    name:string

    constructor(id:number,name:string){
        this.id=id,
        this.name=name
    }
    register()
    {
        return `${this.name} is registered`
    }
}

const person1 = new Person(1,"sync1")
const person2 = new Person(2,"sync2")
console.log(person1)
console.log(person2)
console.log(person1.register())

//extends
class Employee extends Person{
    position :string

    constructor(id:number,name:string,position:string)
    {
        super(id,name)
        this.position=position
    }
}
const emp1 = new Employee(1,"sync1","Developer")
console.log(emp1)

//Generics
function getArray<T>(items: T[]):T[]
{
    return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4,5])
let stringArray = getArray<string>(["1","2","3"])