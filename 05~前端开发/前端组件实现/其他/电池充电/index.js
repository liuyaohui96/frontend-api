(function() {
  const battery = document.querySelector('.battery');

  setInterval(() => {
    battery.innerHTML = '&#xe637;';
    setTimeout(() => {
      battery.innerHTML = '&#xe622;';
    }, 1000);
    setTimeout(() => {
      battery.innerHTML = '&#xe8ce;';
    }, 2000);
    setTimeout(() => {
      battery.innerHTML = '&#xe8cd;';
    }, 3000);
    setTimeout(() => {
      battery.innerHTML = '&#xe8cc;';
    }, 4000);
  }, 5000);
})();
