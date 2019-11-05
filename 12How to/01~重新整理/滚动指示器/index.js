(function() {
  const bar = document.querySelector('.bar');
  window.addEventListener('scroll', scrollHandler);
  function scrollHandler() {
    console.log(bar);
    bar.style.width =
      (document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
        100 +
      '%';
  }
})();
