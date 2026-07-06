document.querySelectorAll("img[data-fallback]").forEach((image) => {
  image.addEventListener(
    "error",
    () => {
      image.src = image.dataset.fallback;
      image.removeAttribute("data-fallback");
    },
    { once: true },
  );
});
