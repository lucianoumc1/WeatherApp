
async function addBackground(weather) {
  const url = `https://source.unsplash.com/random/?${weather}`;
  const data = await fetch(url);

  let filter = "linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))";
  let src = `${filter}, url(${data.url})`;

  changeImage.style.backgroundImage = src;
}
