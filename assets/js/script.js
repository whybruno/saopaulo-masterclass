// Mobile Menu

document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menu');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    
    if (!mobileMenu.classList.contains('hidden')) {
      // Menu is open, set background to menu-hover.png
      menuButton.classList.remove('bg-[url(\'./assets/images/menu.png\')]');
      menuButton.classList.add('bg-[url(\'./assets/images/menu-close.png\')]');
      // Change hover to menu.png
      menuButton.classList.remove('hover:bg-[url(\'./assets/images/menu-hover.png\')]');
      menuButton.classList.add('hover:bg-[url(\'./assets/images/menu-close-hover.png\')]');
    } else {
      // Menu is closed, revert background to menu.png
      menuButton.classList.remove('bg-[url(\'./assets/images/menu-close.png\')]');
      menuButton.classList.add('bg-[url(\'./assets/images/menu.png\')]');
      // Change hover to menu-hover.png
      menuButton.classList.remove('hover:bg-[url(\'./assets/images/menu-close-hover.png\')]');
      menuButton.classList.add('hover:bg-[url(\'./assets/images/menu-hover.png\')]');
    }
  });
});

// Countdown

document.addEventListener('DOMContentLoaded', function() {
  const endDate = new Date('October 18, 2024 00:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (distance < 0) {
      clearInterval(interval);
      document.getElementById('days').textContent = '0';
      document.getElementById('hours').textContent = '0';
      document.getElementById('minutes').textContent = '0';
      document.getElementById('seconds').textContent = '0';
    }
  }

  const interval = setInterval(updateCountdown, 1000);
});
