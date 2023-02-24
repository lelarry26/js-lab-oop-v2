


## Problems 

#### 1. Create a class
- Create an empty class called `Student`

#### 2. Create Objects
- Create 5 students objects (instances of the class `Student`) of `Student` type.


#### 3. Create a method
- Create a `greeting` method inside of the class `Student` class with a `name` parameter. The return of the method should be the string:

```js
`Good morning ${name}`
``` 

#### 4. Call the greet method
- Call the greet method on each of the students in #2 passing in a different
name argument each time. 
- Since the method is returning a string, how would you output the result to your terminal?

#### 5. Constructor 
- Create a constructor for the `Student` class. 
- Create a print statement inside of the constructor with the string **"Hello World"**.
- Run your `oop.js` again and you should see a print statement for each student object that you created. 

#### 6. Adding instance variables to constructor
- Pass in `name` as a parameter to your `Student` constructor. 
- Create an instance variable for `name`.
- 6c. Refactor your greeting method by removing the name parameter and 
adding a "self" in front of the printed "name" variable in the return statement 
6d. Refactor your Student objects by passing in the name as an argument when the
object gets instantiated 

7. Class Methods
7a. Create a "Class" method inside of the "Student" called "campus" that returns the 
Statement "Digital Crafts - Houston"
Campus is a "Class" method so it should not have "self" as an argument. 
7b. call the campus method by invoking Student.campus()
7c. Call the campus method on each of the student objects 
7d. Return the name of the student in the campus method (instance variable) (you should
get an error)

8. Class Variables 
- 8a. Create a class variable inside of the Student class called "cohort" whose value is
"April 2021 Cohort"
- 8b. Print to the console each class variable for each of the student objects, i.e. 
Michah.cohort 
- 8c. Refactor your class method to print out the class variable when it is called 
- 8d. Call the class method on the class (i.e. Student.campus())
- 8e. Call the class method on each object (i.e. Dan.campus())

9. Accessor Modifiers 
Refactor your constructor to take a parameter for studentID
- 9a. Create a new instance variable for studentID with the value _studentID
Refactor the student objects to pass a studentID argument
- 9b. Print the studentID value to the console
Change the value of studentID to __studentID 
Print the value to the console (you should get an error)


## Inheritance 

Create a new class called Car with the following method :
CarDetails which prints "Here are details of this car"

Create a new class called Hybrid that inherits from the Car class
 with the following method: CarType which prints "I am a hybrid car" 


Create a new class called Electric that inherits from the Car class
 with the following  method: CarType which prints "I am a hybrid car" 

Create a Hybrid instance and an Electric instance
Call the method CarType on the Hybrid Instance and Electric Instance 
Call the method Car Details on each instance


Add the following instance variables to the Car class :
- make 
- model 
- color