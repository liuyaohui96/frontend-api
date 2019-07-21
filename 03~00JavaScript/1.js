document.getElementById('fileInput').addEventListener('change', function() {
  if (this.files) {
    let file = this.files[0];
    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function() {
      let e = document.createElement('div');
      e.textContent = this.result;
      document.body.appendChild(e);
    };
  }
});
