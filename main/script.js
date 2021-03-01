let first = () => {
  document.getElementById("desc").innerText = "first";
  // scroll indicator's background
  document.getElementById("bar1").style.backgroundColor = "#fff";
  document.getElementById("bar2").style.backgroundColor = "transparent";
  // pictures opacity
  document.getElementById("secondPhoto").style.opacity = "0.5";
  document.getElementById("firstPhoto").style.opacity = "1";
}

let second = () => {
  document.getElementById("desc").innerText = "second";
  // scroll indicator's background
  document.getElementById("bar2").style.backgroundColor = "#fff";
  document.getElementById("bar1").style.backgroundColor = "transparent";
  // pictures opacity
  document.getElementById("firstPhoto").style.opacity = "0.5";
  document.getElementById("secondPhoto").style.opacity = "1";
}

let reset = () => {
  document.getElementById("desc").innerText = "Starter Text";
  document.getElementById("bar1").style.backgroundColor = "transparent";
  document.getElementById("bar2").style.backgroundColor = "transparent";
  document.getElementById("firstPhoto").style.opacity = "1";
  document.getElementById("secondPhoto").style.opacity = "1";
}