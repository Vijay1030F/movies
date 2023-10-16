
function loadPage() {
    const box = document.getElementById('navigate');
  
    fetch('navigatebox.html')
      .then(response => response.text())
      .then(html => {
        box.innerHTML = html;
      })
      .catch(error => {
        console.log(error);
      });
  }
  loadPage();
  
  
