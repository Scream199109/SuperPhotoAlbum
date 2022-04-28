// const containerAlbums = document.querySelector("#containerAlbums");
const colomnDiv = document.querySelector("#colomnDiv");
const photos = document.querySelector("#photos");
console.log(photos);
colomnDiv.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log(event.target);
  const tick = event.target.id;
  console.log("ID>>>>", tick);
  const response = await fetch("/allAlbums", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: tick,
    }),
  });
  const data = await response.text();
  photos.innerHTML = data;
  console.log(data);
});
