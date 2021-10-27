//getter dan setter ada di prototype bukan di instance object
class Person {
  constructor(F, L) {
    this.F = F;
    this.L = L;
  }
  get fullName() {
    return `${this.F} ${this.L}`;
  }
  set fullName(name) {
    const [F, L] = name.split(" ");
    this.F = F;
    this.L = L;
  }
}

const radit = new Person("Radeet", "Eka");
console.info(radit.fullName);
radit.fullName = "hw kk";
console.info(radit.fullName);
