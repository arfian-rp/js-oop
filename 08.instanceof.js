//instanceof : boolean
//apakah sebuah objek adalah instance atau turunan class

class Class2 {}
class Class1 extends Class2 {}
class Class3 {}

const a = new Class1();
console.log(a instanceof Class1);
console.log(a instanceof Class2);
console.log(a instanceof Class3);
