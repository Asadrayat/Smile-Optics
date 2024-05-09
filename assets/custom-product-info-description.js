document.addEventListener("DOMContentLoaded", () => {
  const maxL = 318;

  document.querySelectorAll(".product__description").forEach((content) => {
    const text = content.textContent;
    if (text.length > maxL) {
      const begin = text.substr(0, maxL);
      const end = text.substr(maxL);

      content.innerHTML = begin;
      content.insertAdjacentHTML(
        "beforeend",
        `...<br><a class="readmore" href="#">read more</a>`
      );
      content.insertAdjacentHTML("beforeend", `<div class="hidden endText__">${end}<br><a href="#" class="read-less">read less</a></div>`);
    }
  });
  document.querySelector(".readmore").addEventListener("click", (event) => {
      event.preventDefault();
      event.target.classList.toggle("hidden");  
      document.querySelector(".endText__").classList.remove("hidden")
  });
  document.querySelector(".read-less").addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(".readmore").classList.toggle("hidden");  
      document.querySelector(".endText__").classList.add("hidden")
  });
});


