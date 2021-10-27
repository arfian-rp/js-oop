//kegunaan membuat error manual kita dapat menyisipkan informasi tambahan
class ValidationError extends Error {
  constructor(msg, field) {
    super(msg);
    this.field = field;
  }
}

class Check {
  static check(check) {
    if (!check) {
      throw new ValidationError(`error`, 123); //melempar error
    }
    console.log(`tidak error`);
  }
}

try {
  Check.check();
} catch (e) {
  console.log(e.message, e.field); //dapat mengakses field
} finally {
  console.log(`selesai`);
}
