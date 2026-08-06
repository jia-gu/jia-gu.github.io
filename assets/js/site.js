(function () {
  var toggle = document.querySelector('.nav-toggle');
  var navigation = document.getElementById('primary-navigation');

  if (toggle && navigation) {
    var closeMenu = function () {
      toggle.setAttribute('aria-expanded', 'false');
      navigation.removeAttribute('data-open');
    };

    toggle.addEventListener('click', function () {
      var willOpen = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(willOpen));
      if (willOpen) {
        navigation.setAttribute('data-open', 'true');
      } else {
        navigation.removeAttribute('data-open');
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 720) {
        closeMenu();
      }
    });
  }

  var year = document.querySelector('[data-current-year]');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}());
