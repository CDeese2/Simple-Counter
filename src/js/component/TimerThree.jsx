class Clock {
    constructor(seconds = 0, selector) {
      this.seconds  = seconds;
      this.selector = selector;
      this.interval = 0;
      this.state    = false;
    }
    
    prefix(n) {
      return n < 10 ? `0${n}` : n;
    }
    
    render() {
      let secs   = this.prefix(this.seconds % 60);
      let mins   = this.prefix(Math.floor(this.seconds / 60) % 60);
      let hours  = this.prefix(Math.floor(this.seconds / 60 / 60) % 24);
    
      this.selector.innerHTML = `${hours}:${mins}:${secs}`;
    }
    
    start() {
      if (this.state)
        return;
      this.state = true;
      this.seconds += 1;
      this.render();
      this.interval   = setInterval(() => {
        this.seconds += 1;
        this.render();
      }, 1000);
    }
    
    stop() {
      this.seconds = 0;
      this.state   = false;
      this.render();
      clearInterval(this.interval);
    }
    
    pause() {
      if (!this.state)
        return;
      this.state = false;
      return clearInterval(this.interval);
    }
    
    resume() {
      this.start();
    }
  }
  
  const countUp = new Clock(0, document.getElementById("clock"));
  //0 is the starting time for the clock in seconds
  
  document.getElementById("stop").addEventListener("click", () => countUp.stop());
  document.getElementById("pause").addEventListener("click", () => countUp.pause());
  document.getElementById("play").addEventListener("click", () => countUp.resume());