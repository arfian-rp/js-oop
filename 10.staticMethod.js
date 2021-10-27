//sama kaya no 09 tapi method

class Config {
  static count = 1;
  static incre(time) {
    if (time) {
      this.count += time;
    } else {
      this.count++;
    }
  }
}

Config.incre();
console.log(Config.count);
