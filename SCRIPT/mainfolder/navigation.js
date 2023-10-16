function loadPage() {
    const box = document.getElementById('navigationbox');
  
    fetch('Navigation.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  loadPage();