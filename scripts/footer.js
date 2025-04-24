document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const copyright = document.getElementById("copyrightYear");
  if (copyright) {
    copyright.textContent = currentYear;
  }
});
