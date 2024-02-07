let cardImage = document.querySelector(".card img");
let name = document.querySelector(".details h2");
let followers = document.querySelector(".details h3");
const button = document.querySelector("#getDetails");

const requrl = "https://api.github.com/users/Abhishek120797";

const xhr = new XMLHttpRequest();

button.addEventListener("click", () => {
  xhr.open("GET", requrl);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
      cardImage.setAttribute("src", data.avatar_url);
      name.innerText = data.name;
      followers.innerText = `Bio : ${data.bio}`;
    }
  };
});
