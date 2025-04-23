// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const copyright = document.getElementById("copyrightYear");
  if (copyright) {
    copyright.textContent = currentYear;
  }

  // Christmas countdown
  const countdownElement = document.getElementById("countdown");
  if (countdownElement) {
    const christmasDate = new Date(`December 25, ${currentYear} 00:00:00`).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeRemaining = christmasDate - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
          ${days} days, 
          ${hours} hours, 
          ${minutes} minutes, 
          ${seconds} seconds
        `;
      } else {
        countdownElement.innerHTML = "Merry Christmas!";
      }
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();
  }

  // Combo box handler (for games page)
  const comboBox = document.getElementById('combo-box');
  const heading2 = document.getElementById('heading2');
  const paragraph = document.getElementById('paragraph');

  if (comboBox && heading2 && paragraph) {
    comboBox.addEventListener('change', () => {
      const selected = comboBox.value;
      if (selected === '1') {
        heading2.textContent = 'Guess the number';
        paragraph.innerHTML = 'Every game creator needs to start somewhere, right? Enjoy a simple guess the number game! <a href="guessnum.zip">Download it here</a>';
      } else {
        heading2.textContent = 'Welcome to our games page!';
        paragraph.textContent = 'We currently only have one game to download, but no worries! We will create more content soon!';
      }
    });
  }

  // Highlight current page in navigation
  highlightCurrentPage();
});

// Function to mark the current page in <nav>
function highlightCurrentPage() {
  const currentPath = location.pathname.replace(/\/$/, ""); // Normalize
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname.replace(/\/$/, "");
    const isHomePage = currentPath.endsWith("index.html") && linkPath.endsWith("index.html");
    if (currentPath === linkPath || isHomePage) {
      link.setAttribute("aria-current", "page");
      link.style.fontWeight = "bold"; // Optional: highlight visually
    }
  });
}
