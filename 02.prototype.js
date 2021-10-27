//yg pertama di cek properti/method di instance kalau tidak ada naik ke prototipe
function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.sayHello = function (obj) {
    console.log("hell0 " + obj.firstName + " from " + this.firstName);
  };
}

Person.prototype.sayBye = function () {
  //disimpan di prototipe
  console.info(`bye`);
};

const p1 = new Person("eko", "edi");

// p1.sayBye = function () { //cuma di p1 saja
//   console.log(`bye`);
// };

const p2 = new Person("imam", "wahyu");
console.info(p1);
console.info(p2);

p1.sayBye(); //dapat diakses

//prototipe inheritance
function Employee(name) {
  this.name = name;
}
function Manager(name) {
  this.name = name;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
  console.log(`hello ${name} my name is ${this.name} i am Manager`);
};

Employee.prototype.sayHello = function (name) {
  console.log(`hello ${name} my name is ${this.name} i am Employee`);
};

const manager = new Manager("budi");
manager.sayHello("eko");

const employee = new Employee("beni");
employee.sayHello("eko");
