// const containerAlbums = document.querySelector("#containerAlbums");
const colomnDiv = document.querySelector("#colomnDiv");
const photos = document.querySelector("#photos");
const btnAlbum = document.querySelector(".albumButton");
// console.log("PHOTOS>>>>", photos);
// console.log("colomnDiv>>>", colomnDiv);
colomnDiv?.addEventListener("click", async (event) => {
  event.preventDefault();
  // console.log(event.target);
  const tick = event.target.id;

  // console.log("ID>>>>", tick);
  if (tick === "colomnDiv") {
    console.log(")))))))))");
  } else {

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
    photos.insertAdjacentHTML('afterbegin', data)
    // console.log("🚀 ~ colomnDiv?.addEventListener ~ data", data)
    photos.innerHTML = data;
  }
});

const waveInner = document.querySelector("wave_inner");
// console.log("WAWE>>>>>>", waveInner);
photos.addEventListener("click", async (event) => {
  event.preventDefault();
  const id = event.target.id;
  const del = event.target;
  if (del.innerText === "Удолить") {
    console.log("DEL");
    const response = await fetch("/allAlbums", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const data = await response.text();
    const delPhot = document.querySelector(`div[divid${id}]`);
    delPhot.remove();
  }
  // console.log("DELETE PHOT>>>>", delPhot);
  // delPhot.remove();
  // console.log("DATA>>>>>>", data);
  // alert(`You have clicked on ${id}`)rs
  // console.log("target", event.target);
});
// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })
