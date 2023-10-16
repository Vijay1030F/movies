function loadPage() {
    const box = document.getElementById('movibox');
  
    fetch('movibox/index1.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  loadPage();


  