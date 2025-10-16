<script>
fetch("https://github.com/templateseoala/seo/blob/main/licenses.json")
  .then(r => r.json())
  .then(data => {
    const domain = location.hostname.replace("www.","");
    if(!data.allowedDomains.includes(domain)){
      document.body.innerHTML = "<h2>License Invalid ❌</h2>";
    }
  });
</script>
