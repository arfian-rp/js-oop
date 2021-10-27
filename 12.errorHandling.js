class Check {
  static check(check) {
    if (!check) {
      throw new Error(`error`); //melempar error
    }
    console.log(`tidak error`);
  }
}

try {
  Check.check(); //kemungkinan ada error
} catch (e) {
  console.log(e.message); //dijalankan apabila ada error
} finally {
  console.log(`selesai`); //dijalankan setelah error / tidak error
}
