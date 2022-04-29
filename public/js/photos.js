// const containerAlbums = document.querySelector("#containerAlbums");
const colomnDiv = document.querySelector("#colomnDiv");
// const private = document.getElementById(`private/${ticktock}`);
const photos = document.querySelector("#photos");
// console.log("PHOTOS>>>>", photos);
// console.log("colomnDiv>>>", colomnDiv);
colomnDiv.addEventListener("click", async (event) => {
  event.preventDefault();
  // console.log(event.target);
  const tick = event.target.id;
  const tock = event.target;
  const ticktock = tock.dataset.privid;
  console.log("tock ", tock);
  console.log("tick>>>>", tick);
  console.log("tick-tock>>>>", ticktock);
  // const private = document.querySelector(`p[private${id}]`);
  if (tick === "colomnDiv") {
    console.log(")))))))))");
  } else if (ticktock) {
    const response = await fetch("/allAlbums", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: ticktock,
      }),
    });
    const private = document.getElementById(`private/${ticktock}`);

    const data = await response.json();
    console.log(data);
    if (data.status) {
      private.innerHTML = "&#128274;";
    } else {
      private.innerHTML = "&#128273;";
    }
    // const data = await response.text();
    // photos.innerHTML = data;
  } else if (tick) {
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
  }

  // console.log(data);
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
