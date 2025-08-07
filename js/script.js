    const header = document.getElementById('page-header');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function onScroll() {
      const currentScrollY = window.scrollY;
      // Shrink header after 20px
      if (currentScrollY > 20) {
        header.classList.add('header-shrink');
      } else {
        header.classList.remove('header-shrink');
      }
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        header.classList.add('header-hide');
      } else {
        header.classList.remove('header-hide');
      }
      lastScrollY = currentScrollY;
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    });
