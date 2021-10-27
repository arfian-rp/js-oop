//cuma bisa diakses didalam class
class Counter {
  #count = 0; //private
  increment() {
    this.#count++;
  }
  decrement() {
    this.#count--;
  }
  get count() {
    return this.#count;
  }
}

const a = new Counter();
a.increment();
a.increment();
a.increment();
a.decrement();
// console.log(a.#count); //error
console.log(a.count);
