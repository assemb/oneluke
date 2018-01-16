(function() {
  var deadline = 'June 09 2018 00:00:00 GMT+03:00';
  initializeClock('clockdiv', deadline);

  function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime){
    var clock = document.querySelector('.counter');
    var daysSpan = clock.querySelector('.counter__days');
    var hoursSpan = clock.querySelector('.counter__hours');
    var minutesSpan = clock.querySelector('.counter__minutes');
    var secondsSpan = clock.querySelector('.counter__seconds');

    var timeinterval = setInterval(function(){
      var t = getTimeRemaining(endtime);
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = t.hours;
      minutesSpan.innerHTML = t.minutes;
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      if(t.total<=0){
        clearInterval(timeinterval);
      }
    },1000);
  }
})();