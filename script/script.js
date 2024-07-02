if (window.location.href == "https://ecolosseum.github.io/invite") { window.location.href = "https://www.canva.com/design/DAFg8pM4JIo/U2TVw87-xWJF6nBYVGQh1g/view?utm_content=DAFg8pM4JIo&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" };

var typed = new Typed("#typing", {
  strings: ["AGI", "Innovation", "Learning"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 40,
});

let flick = function() {

  let state = true

  const debug = document.getElementsByClassName("debug")[0]
  debug.innerHTML = "COMPILING... <i class='fa-solid fa-pause' style='background: none'></i>"
  document.getElementsByClassName("main")[0].style.animation = "blink1 1s ease-out infinite";
  let query = `<span class="countdown">10</span>`
  document.body.innerHTML += query

  let load = window.setInterval(() => {
    const debug = document.getElementsByClassName("debug")[0]
    if (!state) debug.remove()
    debug.innerHTML = debug.innerHTML.replace(debug.innerHTML.split("COMPILING")[1].split(" ")[0], [".", "..", "..."][Math.floor(Math.random() * 3)])
  }, 500)

  const count = document.getElementsByClassName("countdown")[0]
  let counter = setInterval(() => {
    if (count.textContent == '1') {
      state = false
      clearInterval(counter)
      clearInterval(load)
      document.getElementsByClassName("main")[0].style.animation = "none"
      document.getElementsByClassName("background")[0].innerHTML += "<span style='font-size: 10vw; color: #fff; background: none;'>LIVE NOW</span>"
      count.remove()
    }
    count.textContent = parseInt(count.textContent) - 1;
  }, 1000)

}

// Target date in UTC
var countDownDate = new Date('July 2, 2024 20:55:00 UTC').getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").style.display = "none"; // Hide countdown
    document.getElementById("debug_show").style.display = "block"; // Show debug button
    return;
  }

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Format with leading zeros if needed
  var hoursStr = hours < 10 ? "0" + hours : hours;
  var minutesStr = minutes < 10 ? "0" + minutes : minutes;
  var secondsStr = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("count").innerHTML = hoursStr + " hours " + minutesStr + " minutes " + secondsStr + " seconds";

}, 1000);


particlesJS.load("particles-js", "particlesjs-config.json", () => {
  console.log("Particles.js config loaded!");
});
