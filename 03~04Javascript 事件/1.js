var btn = document.getElementById('myBtn');
btn.addEventListener(
  'click',
  function() {
    alert(this.id);
  },
  false
);
btn.removeEventListener(
  'click',
  function() {
    //没有用！
    alert(this.id);
  },
  false
);
