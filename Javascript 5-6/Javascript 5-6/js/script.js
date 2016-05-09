
var timer = document.getElementsByClassName('timer')[0];
var startBtn = document.getElementsByClassName('startBtn')[0];
var clearBtn = document.getElementsByClassName('clear')[0];


function Stopwatch(elem) {
  var time = 0;  // current time
  var interval;
  var startPoint;  //data now

  function update() {
    if (this.isOn) {
    time += delta();
    // time += timePassed;
   }

    var formattedTime = timerFormatter(time);
    elem.textContent = formattedTime;
  }

  function delta() {          //how much time passed
    var now = Date.now();
    var timePassed = now - startPoint;
    startPoint = now;
    return timePassed;
  }

  function timerFormatter(timeInMilliseconds) {
    var time = new Date(timeInMilliseconds);
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }

      if (seconds.length < 2) {
      seconds = '0' + seconds;
      }

      while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
      }

   return minutes + ' : ' + seconds + ' : ' + milliseconds;
  }

  this.isOn = false;

  this.start = function() {
    if (!this.isOn) {
      interval = setInterval(update.bind(this), 10);
      startPoint = Date.now();
      this.isOn = true;
    }
  };

  this.stop = function() {
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };

  this.reset = function() {
    time = 0;
    update();
  };
}

var watch = new Stopwatch(timer);

startBtn.addEventListener('click', function() {
  if (watch.isOn) {
    watch.stop();
    startBtn.innerHTML = 'Start';
  } else {
    watch.start();
    startBtn.innerHTML = 'Pause';

  }
});

clearBtn.addEventListener('click', function() {
  watch.reset();
});
