//diakses melalui class bukan objek
//kaya' variable global

class Config {
  //static tidak ikut objek, tapi class
  static DB_NAME = "mysql";
  static TBL_NAME = "person";
  static USER = "root";
  static PSWD = "root";
}

console.log(Config.DB_NAME);
console.log(Config.TBL_NAME);
console.log(Config.USER);
console.log(Config.PSWD);
