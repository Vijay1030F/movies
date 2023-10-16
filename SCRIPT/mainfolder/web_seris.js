function loadPage() {
    const box = document.getElementById('movibox4');
  
    fetch('movibox/web_seris1.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  loadPage();