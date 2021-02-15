window.onload = function(){

const timeInetrval = setInterval(function() {       
  const giveawayEndDate = new Date("Feb 19, 2021 00:00:00").getTime();
  const timeDistance = giveawayEndDate - Date.now();

  const days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDistance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDistance / 1000 / 60) % 60);
  const seconds = Math.floor((timeDistance / 1000) % 60);

  document.getElementById("countdown");
  countdown.querySelector('.clock__days').innerHTML = ('0' + days).slice(-2);
  countdown.querySelector('.clock__hours').innerHTML = ('0' + hours).slice(-2);
  countdown.querySelector('.clock__minutes').innerHTML = ('0' + minutes).slice(-2);
  countdown.querySelector('.clock__seconds').innerHTML = ('0' + seconds).slice(-2);
  
  
  if (timeDistance < 0) {
    clearInterval(timeInetrval);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

}

  
