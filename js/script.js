const showMore = document.getElementById("arrow");

showMore.addEventListener("change", () => {
  const textContainer = document.querySelector(".card-description__text");
  const button = document.querySelector(".card-description__button");
  if (showMore.checked) {
    button.style.transform = "rotate(-45deg)";
    textContainer.style.maxHeight = textContainer.scrollHeight + "px";
  } else {
    button.style.transform = "rotate(135deg)";
    textContainer.style.maxHeight = "120px";
  }
});
