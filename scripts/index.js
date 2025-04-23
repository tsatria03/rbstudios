    // JavaScript to set the current year in the copyright notice
    const currentYear = new Date().getFullYear();
    document.getElementById("copyrightYear").textContent = currentYear;

    // JavaScript countdown timer
    const christmasDate = new Date("December 25, " + currentYear + " 00:00:00").getTime();
    const countdownElement = document.getElementById("countdown");

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

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Initial update
    updateCountdown();

    (function () {
      const comboBox = document.getElementById('combo-box');
      const heading2 = document.getElementById('heading2');
      const paragraph = document.getElementById('paragraph');

      comboBox.addEventListener('change', function () {
        const selectedOption = comboBox.options[comboBox.selectedIndex];
        const selectedOptionValue = selectedOption.value;

        switch (selectedOptionValue) {
          case '1':
            heading2.textContent = 'Guess the number';
            paragraph.innerHTML = 'Every game creator needs to start somewhere, right? Enjoy a simple guess the number game! <a href="guessnum.zip">Download it here</a>';
            break;
          default:
            heading2.textContent = 'Welcome to our games page!';
            paragraph.textContent = 'We currently only have one game to download, but no worries! We will create more content soon!';
            break;
        }
      });

    })();
