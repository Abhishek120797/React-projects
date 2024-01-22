const clock = document.querySelector("#clock");

setInterval(() => {
  let date = new Date();
  clock.innerHTML = `<span>${date.toLocaleTimeString()}</span>`;
}, 1000);
