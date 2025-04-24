document.addEventListener("DOMContentLoaded", () => {
  const comboBox = document.getElementById('combo-box');
  const heading2 = document.getElementById('heading2');
  const paragraph = document.getElementById('paragraph');

  if (comboBox && heading2 && paragraph) {
    comboBox.addEventListener('change', () => {
      const selected = comboBox.value;
      if (selected === '1') {
        heading2.textContent = 'Guess the number';
        paragraph.innerHTML = 'Every game creator needs to start somewhere, right? Enjoy a simple guess the number game!<br> <a href="https://github.com/tsatria03/guessnum_js/releases/download/V1.00/guessnumjs.rar">Download it here</a>';
      } else {
        heading2.textContent = 'Welcome to our games page!';
        paragraph.textContent = 'We currently only have one game to download, but no worries! We will create more content soon!';
      }
    });
  }

  highlightCurrentPage();
});

// Function to mark the current page in <nav>
function highlightCurrentPage() {
  const currentPath = location.pathname.replace(/\/$/, "");
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname.replace(/\/$/, "");
    const isHomePage = currentPath.endsWith("index.html") && linkPath.endsWith("index.html");
    if (currentPath === linkPath || isHomePage) {
      link.setAttribute("aria-current", "page");
      link.style.fontWeight = "bold";
    }
  });
}
