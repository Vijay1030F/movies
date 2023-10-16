function loadPage() {
    const box = document.getElementById('movibox1');
  
    fetch('movibox/Hurror1.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  loadPage();