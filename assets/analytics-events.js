(function () {
  function track(eventName) {
    if (window.umami && typeof window.umami.track === "function") {
      window.umami.track(eventName);
    }
  }

  document.addEventListener("click", function (event) {
    var target = event.target.closest("a, button");
    if (!target) return;

    if (target.matches('a[href^="devis.html"]')) {
      track("quote-cta-click");
      return;
    }

    if (target.matches('a[href*="instagram.com"]')) {
      track("instagram-click");
      return;
    }

    if (target.matches('a[href*="facebook.com"]')) {
      track("facebook-click");
      return;
    }

    if (target.matches('a[href^="mailto:"]')) {
      track("email-click");
      return;
    }

    if (target.matches(".gallery-filters button")) {
      track("gallery-filter-click");
    }
  });

  var quoteForm = document.querySelector(".quote-form");
  if (!quoteForm) return;

  var formStarted = false;
  quoteForm.addEventListener(
    "input",
    function () {
      if (formStarted) return;
      formStarted = true;
      track("quote-form-start");
    },
    { once: true }
  );

  quoteForm.addEventListener(
    "submit",
    function () {
      if (quoteForm.checkValidity()) {
        track("quote-email-open");
      }
    },
    true
  );
})();
