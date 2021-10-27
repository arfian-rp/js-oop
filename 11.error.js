class Check {
  constructor(check) {
    if (!check) {
      throw new Error("kosong"); //melempar error
    }
    console.log(`tidak error`);
  }
}

const x = new Check();
