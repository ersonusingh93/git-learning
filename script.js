
// functional : 

// Object Oriented : 

// Object Oriented Programming : 
// paradigm based on objects: 

// features : 

// data : properties
// methods : 

// Class : 

// User{
//     name
//     age
//     salary
// }

// Phone{
//     home(){}
//     play
//     rearcamera
//     frontcamera
// }


// four pillers of oops : 

// abstraction : 

// Encapsulation : 

// Inheritance : 

// Polymorphism : 
// add(name)
// add(name, age)
// add(name, age, salary)


// class Animal{
//     display()
//     {
//         console.log('This is animal class');
//     }
// }

// const obj = new Animal();
// obj.display();


// class Animal{
//     detailsAnimal(name, age)
//     {
//         console.log(`Name of Animal is : ${name} and age is ${age}`);
//     }
// }

// const obj = new Animal();

// obj.detailsAnimal("Tommy",5);


// class Animal{
//     constructor(name, age)
//     {
//         console.log(`Name of Animal is ${name} and age is ${age} years`);
//     }
// }

// const obj = new Animal("Ricky",6);

// Constructor : default constructor : 

// class Shape{
//     constructor()
//     {
//         console.log("This is default constructor");
//     }
// }

// const obj = new Shape();


// class Shape{
//     constructor(l,b)
//     {
//         let length = l;
//         let breadth =b;
//         let area = length * breadth;
//         console.log(`Area of rectangle is ${area}`);

//     }
// }

// const obj = new Shape(25,25);


// class Shape{
//     constructor(l, b, h)
//     {
//         this.l = l;
//         this.b = b;
//         this.h = h;
//         let vol  = l * b * h;
//         console.log(`Volume of cuboid is : ${vol}`);
//     }
// }

// const obj = new Shape(1,2,3);


// class Employee{
//     constructor(name, age, salary)
//     {
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }
//     displayDetails()
//     {
//         console.log(`Details of employee is: `);
//         console.log(`Welcome: ${this.name} your age is ${this.age} years will get salary ${this.salary} `);
//     }
// }

// const obj = new Employee("Divyesh",25,18000);
// obj.displayDetails();


//Inheritance in JavaScript : 

//class, Object , constructor

//inheritance - single level - Parent class(Super class) -> Child class(sub class)
// class Animal{
//     constructor()
//     {
//         console.log("This is parent Constructor: ");
//     }
// }

// class Dog extends Animal{
//     display()
//     {
//         console.log("This is child class ");
//     }

// }

// const obj =  new Dog();
// obj.display();

// class Animal{
//     sound()
//     {
//         console.log("Every Animal has different sound");
//     }
//     sleep()
//     {
//         console.log("Every Animal Sleeps");
//     }

// }
// class Dog extends Animal{
//     speak()
//     {
//         console.log("Dog Barks");
//     }
//     eat()
//     {
//         console.log("Dog is eating");
//     }


// }
// class PetDog extends Dog{
//     play()
//     {
//         console.log("Pet Dogs are playing");
//     }

// }

// const obj =  new PetDog();
// obj.eat();
// obj.sleep();
// obj.play();
// obj.sound();


// class Shape{
//     constructor()
//     {
//         console.log("This is parent clas constructor");
//     }
//     display()
//     {
//         console.log("This is parent class");
//     }

// }
// class Rectangle extends Shape{
//     constructor()
//     {
//         super(this.display());
//     }
//     display()
//     {
        
//         console.log("This is Child class");
//     }

// }

// const obj = new Rectangle();
// obj.display();


class Shape{
    constructor(name)
    {
        this.name = name;
        console.log(name);
    }
}
class Rectangle extends Shape{
    constructor(name, index)
    {
        super(name);
        this.index = index;
    }
    display()
    {
        console.log(`Welcome ${this.name} your index is ${this.index}`);
    }
}

const obj = new Rectangle("Ram",1);
obj.display();
// const ob =  new Shape();