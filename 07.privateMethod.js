class Angka {
  #tambah(x, y) {
    return x + y;
  }
  getTambahSatu([x, y]) {
    console.log(this.#tambah(x, y) + 1);
  }
}

const a = new Angka();
a.getTambahSatu([1, 2]);
