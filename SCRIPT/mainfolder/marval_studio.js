function loadPage() {
    const box = document.getElementById('movibox2');
  
    fetch('movibox/marval_studio1.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  loadPage();