// 1. Create a class
//Create an empty class called `Student`

// class Student{
// }

//------------------------------------------------------------

// 2. Create Objects
//Create 5 students objects (instances of the class `Student`) of `Student` type.

// class Student{
// }

// let student1 = new Student();
// let student2 = new Student();
// let student3 = new Student();
// let student4 = new Student();
// let student5 = new Student();

//------------------------------------------------------------

// 3. Create a method
// Create a `greeting` method inside of the class `Student` class with a `name` parameter. 
// The return of the method should be the string: `Good morning ${name}`

// class Student{
//    greetingMethod(name){
//       let greeting = `Good morning ${name}`;
//       return greeting;
//    } 
// }
// let student1 = new Student();
// let student2 = new Student();
// let student3 = new Student();
// let student4 = new Student();
// let student5 = new Student();


//I'm not sure if I am following the problem correctly, since name isn't yet defined in a constructor

//------------------------------------------------------------

// 4. Call the greet method
// Call the greet method on each of the students in #2 passing in a different
// name argument each time. 
// Since the method is returning a string, how would you output the result to your terminal?
//--Answer
//--Not sure what the question is asking, see comment below code

// class Student{
//    greetingMethod(name){
//       let greeting = `Good morning ${name}`;
//       return greeting;
//    } 
// }

// let student1 = new Student();
// let student2 = new Student();
// let student3 = new Student();
// let student4 = new Student();
// let student5 = new Student();

// console.log(student1.greetingMethod("name1"));
// console.log(student2.greetingMethod("name2"));
// console.log(student3.greetingMethod("name3"));
// console.log(student4.greetingMethod("name4"));
// console.log(student5.greetingMethod("name5"));

//--Is this right? I'm not sure if there is a way to define name without a constructer before the next steps, 
//--it prints undefined when it is `Good morning ${name}` instead of "`Good morning ${name}`" 

//------------------------------------------------------------

// 5. Constructor 
//Create a constructor for the `Student` class. 
//Create a print statement inside of the constructor with the string **"Hello World"**.
//Run your `oop.js` again and you should see a print statement for each student object that you created. 
//Why did this happen? 
//--Answer
//--This happened because all student objects belong to the Student constructor. 
//--For each student object, the print statement will print once for every object assigned to the class.

// class Student{
//    constructor(){
//       console.log("Hello World")
//    }
//    greetingMethod(name){
//       let greeting = `Good morning ${name}`;
//       return greeting;
//    } 
// }

// let student1 = new Student();
// let student2 = new Student();
// let student3 = new Student();
// let student4 = new Student();
// let student5 = new Student();

// console.log(student1.greetingMethod("name1"));
// console.log(student2.greetingMethod("name2"));
// console.log(student3.greetingMethod("name3"));
// console.log(student4.greetingMethod("name4"));
// console.log(student5.greetingMethod("name5"));

//------------------------------------------------------------

// 6. Adding instance variables to constructor
// - Pass in `name` as a parameter to your `Student` constructor. 
// - Create an instance variable for `name`.
// - The instance variables now require that you pass in a `name` when created.  Refactor your object instances in #2 by passing in a `name` to each instance. 
// - Refactor the print statement in your constructor like and run your program.
// ```js
// `Good morning ${this.name}`
// ``` 
// You should see a print statement for each name you passed into your object instances. How did this happen?
//--Answer
//--Since a constructor with the name parameter was created and name was passed to each new student object, 
//--the print statement was able to print "Good morning" and each object's name, as it was a part of the student class.

// - Refactor your greeting method by updating the returned string 

// ```js 
// `Good morning ${this.name}`
// ```

// - Call the greet method on one of your instance objects and print the results to the screen.  What gets printed?
// - Call the greet method on a different instance object and print the results to the screen.  What gets printed?
//--Answers
//--Calling the greet method on each instance object and printing them results with the printing 
//--"Good morning" and each object's name, as it was a part of the student class.


// class Student{
//    constructor(name){
//       this.name = name;
//       console.log(`Good morning ${this.name}`);
//    }
//    greetingMethod(){
//       let greeting = `Good morning ${this.name}`;
//       return greeting;
//    } 
// }

// let student1 = new Student("Larry");
// let student2 = new Student("RJ");
// let student3 = new Student("Clinton");
// let student4 = new Student("Denise");
// let student5 = new Student("Liz");

// console.log(student1.greetingMethod());
// console.log(student2.greetingMethod());
// console.log(student3.greetingMethod());
// console.log(student4.greetingMethod());
// console.log(student5.greetingMethod());

//------------------------------------------------------------

// Inheritance 

// // Car Class
// Create a new class called `Car` with the following method :

// `CarDetails` which prints "Here are details of this car"

// // Hybrid Class
// Create a new class called `Hybrid` that inherits from the `Car` class with the following method: 
 
// `CarType` which prints "I am a hybrid car" 


// // Electric Class
// Create a new class called `Electric` that inherits from the `Car` class with the following  method: 

// `CarType` which prints "I am an electric car" 

// // Using Inheritance
// - Create a Hybrid instance and an Electric instance
// - Call the method CarType on the Hybrid Instance and Electric Instance 
// - Call the method Car Details on each instance


// Add the following instance variables to the Car class :
// - make 
// - model 
// - color




// class Car{
//    constructor(make, model, color){
//       this.make = make, 
//       this.model = model, 
//       this.color = color
//    }
//    carDetailsMethod(){
//       let carDetails = "Here are the details of this car:";
      
//       // // return carDetails + this.make + this.model + this.color; bad, no spaces
//       // // return carDetails + " " + this.make + " " + this.model + " " +this.color; good, spaces in quotes
//       return `${carDetails} ${this.make} ${this.model} ${this.color}`; best
//    }
// }

// class Hybrid extends Car{
//    constructor(make, model, color, type){ //--Constructor not needed because it is inherited?
//       super(make, model, color);
//       // this.type = type; --Extra
//    }
   
//    carTypeMethod(){
//       let carType = `I am a ${this.type} hybrid car.`;
//       return carType;
//    }
// }

// class Electric extends Car{
//    carTypeMethod(){
//       let carType = "I am an electric car.";
//       return carType;
//    }
// }

// let car1 = new Hybrid("MakeA", "ModelA", "ColorA");
// let car2 = new Electric("MakeB", "ModelB", "ColorB");
// // let car1 = new Hybrid("Toyota ", "Corolla", "white", "sedan"); // I'm adding a new argument 

// console.log(car1.carTypeMethod());
// console.log(car2.carTypeMethod());
// console.log(car1.carDetailsMethod(car1.make, car1.model, car1.color));
// console.log(car2.carDetailsMethod(car2.make, car2.model, car2.color));

// // console.log(car1.carTypeMethod());
// // function testFunction(){
// //    return "Bubble tea is clintons drug"
// // }
// // console.log(`Anything I want    ${car1.carDetailsMethod(car1.make, car1.model, car1.color)} ${car1.carTypeMethod()} ${testFunction()} bubble tea`);