


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
- Run your `oop.js` again and you should see a print statement for each student object that you created. Why did this happen? 

#### 6. Adding instance variables to constructor
- Pass in `name` as a parameter to your `Student` constructor. 
- Create an instance variable for `name`.
- The instance variables now require that you pass in a `name` when created.  Refactor your object instances in #2 by passing in a `name` to each instance. 
- Refactor the print statement in your constructor like and run your program.
```js
`Good morning ${this.name}`
``` 
You should see a print statement for each name you passed into your object instances. How did this happen?

- Refactor your greeting method by updating the returned string 

```js 
`Good morning ${this.name}`
```

- Call the greet method on one of your instance objects and print the results to the screen.  What gets printed?
- Call the greet method on a different instance object and print the results to the screen.  What gets printed?


## Inheritance 

#### Car Class
Create a new class called `Car` with the following method :

`CarDetails` which prints "Here are details of this car"

#### Hybrid Class
Create a new class called `Hybrid` that inherits from the `Car` class with the following method: 
 
`CarType` which prints "I am a hybrid car" 


#### Electric Class
Create a new class called `Electric` that inherits from the `Car` class with the following  method: 

`CarTyp`e which prints "I am a hybrid car" 

#### Using Inheritance
- Create a Hybrid instance and an Electric instance
- Call the method CarType on the Hybrid Instance and Electric Instance 
- Call the method Car Details on each instance


Add the following instance variables to the Car class :
- make 
- model 
- color