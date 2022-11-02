let inputFieldValue = document.querySelector("input");
let downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  downloadBtn.innertext = "Downloading...";
  fetchUrl(inputFieldValue.value);
});

function fetchUrl(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let localUrl = URL.createObjectURL(file);
      let tag = document.createElement("a");
      tag.href = localUrl;
      tag.download = url.replace(/^.*[\\\/]/, "");
      document.body.appendChild(tag);
      tag.click();
      downloadBtn.innertext = "Download";
      URL.revokeObjectUrl(localUrl);
      tag.remove();
    })
    .catch((error) => {
      alert(`This Error:  ${error}  Happended, Bruah call 911 !! `);
      downloadBtn.innertext = "Download";
    });
}
