document.addEventListener("DOMContentLoaded", () => {
  const countdownElement = document.getElementById("countdown");
  if (countdownElement) {
    const currentYear = new Date().getFullYear();
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
});
