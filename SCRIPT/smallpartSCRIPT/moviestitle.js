function loadPage() {
    const box = document.getElementById('movititle');
  
    fetch('smallpart/moviestitle.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  loadPage();
