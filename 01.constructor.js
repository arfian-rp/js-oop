//constructor funct
function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.sayHello = function (obj) {
    console.log("hell0 " + obj.firstName + " from " + this.firstName);
  };
}

const p1 = new Person("eko", "edi");
const p2 = new Person("imam", "wahyu");
console.log(p1.firstName);
console.log(p2.firstName);
p1.sayHello(p2);

//constructor inheritance
//nge-copy yg dilakukan constr lainya
function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (obj) {
    console.log("hell0 " + obj.firstName + " from " + this.firstName);
  };
}
function Manager(firstName, lastName) {
  this.lastName = lastName;
  Employee.call(this, firstName); //ngecopy blok function Employee
}
const yahya = new Manager("yahya", "udin");
console.info(yahya);
