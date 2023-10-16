function loadPage() {
    const box = document.getElementById('movibox3');
  
    fetch('movibox/si_fi1.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  loadPage();