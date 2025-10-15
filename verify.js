(function() {
  const licenseURL = "https://github.com/templateseoala/seo/blob/main/licenses.json";
  const currentHost = window.location.hostname;

  fetch(licenseURL)
    .then(response => response.json())
    .then(data => {
      const allowed = data.allowed || [];
      const message = data.message || "Unlicensed Template";
      if (!allowed.includes(currentHost)) {
        document.body.innerHTML = `
          <div style="font-family:sans-serif;text-align:center;padding:40px;">
            <h2>${message}</h2>
            <p>This domain (${currentHost}) is not authorized to use this template.</p>
          </div>`;
      }
    })
    .catch(err => console.error("License check failed:", err));
})();
