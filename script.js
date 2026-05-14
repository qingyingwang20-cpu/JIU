const heroImage = document.querySelector(".hero-media img");

if (heroImage) {
  const source = heroImage.dataset.heroSource;
  if (source) {
    fetch(source)
      .then((response) => response.text())
      .then((base64) => {
        const compact = base64.replace(/\s+/g, "");
        heroImage.src = `data:image/jpeg;base64,${compact}`;
      })
      .catch(() => {
        heroImage.alt = "罗垟山老兵白酒主图加载失败";
      });
  }
}
