(function() {
  // ✅ CHANGE this to your real GitHub Pages URL (not raw.githubusercontent.com)
  const licenseURL = "https://templateseoala.github.io/seo/licenses.json";

  // get current host (blogspot.com or custom)
  const currentHost = window.location.hostname.replace(/^www\./, "").toLowerCase();

  async function checkLicense() {
    try {
      const response = await fetch(licenseURL, { cache: "no-store" });
      if (!response.ok) throw new Error("License file not found");
      const data = await response.json();

      const allowed = (data.allowed || []).map(d => d.toLowerCase());
      const message = data.message || "⚠️ Unlicensed Template";
      const licensed = allowed.includes(currentHost);

      if (!licensed) {
        document.body.innerHTML = `
          <div style="
            font-family:sans-serif;
            text-align:center;
            padding:60px;
            background:#fff;
            color:#222;">
            <h2>${message}</h2>
            <p>This domain <b>${currentHost}</b> is not authorized to use this template.</p>
            <p>Please purchase a valid license at
              <a href="https://yourstore.payhip.com" target="_blank">
                yourstore.payhip.com
              </a>
            </p>
          </div>`;
        console.warn("🚫 Unlicensed domain:", currentHost);
      } else {
        console.log("✅ Licensed domain:", currentHost);
      }
    } catch (err) {
      console.error("License check failed:", err);
    }
  }

  // run after DOM loads (ensures Blogger content exists before replacement)
  if (document.readyState !== "loading") {
    checkLicense();
  } else {
    document.addEventListener("DOMContentLoaded", checkLicense);
  }
})();
