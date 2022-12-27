var emotions = document.querySelectorAll(".img");

function handleClick(event) {
  emotions.forEach((e) => {
    e.classList.remove("click");
    e.classList.add("nonClick");
  });
  event.target.classList.add("click");
  event.target.classList.remove("nonClick");
  console.log(event.target);
}

emotions.forEach((e) => {
  e.addEventListener("click", handleClick);
});
