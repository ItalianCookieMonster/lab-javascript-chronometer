class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start (callback){
    if (!callback) {
      return this.intervalId = setInterval(() => this.currentTime ++, 1000);
    } else {
      return setInterval(callback, 1000);
    }
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let strValue = value.toString();
    if (strValue.length === 1) {
      strValue = '0' + strValue;
    }
    return strValue;
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecId);
  }

  reset() {
    this.currentTime = 0;
    this.millisec = 0;
    document.querySelectorAll('.number').innerHTML = '0';
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let splitTime = `${minutes}:${seconds}`;
    return splitTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
