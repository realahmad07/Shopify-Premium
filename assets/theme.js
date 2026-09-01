document.addEventListener('DOMContentLoaded', function () {
  const yearNode = document.querySelector('.copyright');
  if (yearNode) {
    const currentYear = new Date().getFullYear();
    yearNode.textContent = '© ' + currentYear + ' Al Sadiq. All Rights Reserved.';
  }
});
