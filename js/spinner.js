// (A) SHOW & HIDE SPINNER
function show () {
    document.getElementById("spinner").classList.add("show");
  }
  function hide () {
    document.getElementById("spinner").classList.remove("show");
  }

  // (B) AJAX DEMO - USE HTTP:// NOT FILE://
function demoAJAX () {
    show(); // show spinner
    fetch("index.html")
    .then(res => res.text())
    .then(txt => document.getElementById("spinner").innerHTML = txt)
    .catch(err => console.error(err)) // optional
    .finally(() => hide()); // hide spinner
  }