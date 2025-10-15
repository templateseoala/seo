(function () {
  const licenseURL = "https://github.com/templateseoala/seo/blob/main/licenses.json"; // ← your GitHub Pages JSON
  const currentHost = window.location.hostname.replace(/^www\./, "");

  function showBlock(msg) {
    document.body.innerHTML = `
      <div style="font-family:sans-serif;text-align:center;padding:50px;">
        <h2>${msg}</h2>
        <p>This domain (${currentHost}) is not licensed to use this template.</p>
      </div>`;
  }

  fetch(licenseURL, { cache: "no-store" })
    .then((res) => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then((data) => {
      const allowed = data.allowed || [];
      const message = data.message || "Unlicensed Template";
      if (!allowed.includes(currentHost)) showBlock(message);
      else console.log("✅ Licensed domain:", currentHost);
    })
    .catch((err) => {
      console.error("License check failed:", err);
      showBlock("⚠️  License check error – please try again later.");
    });
})();
