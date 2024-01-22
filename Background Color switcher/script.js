const button = document.querySelectorAll(".button");

const body = document.querySelector("body");

button.forEach((btn) => {
  btn.addEventListener("click", (eObj) => {
    switch (eObj.target.id) {
      case "gray":
        body.style.backgroundColor = eObj.target.id;
        break;
      case "white":
        body.style.backgroundColor = eObj.target.id;
        break;
      case "blue":
        body.style.backgroundColor = eObj.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = eObj.target.id;
        break;
    }
  });
});
