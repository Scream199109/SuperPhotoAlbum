const addFormAlbum = document.querySelector('#add-album');
const addFormPhoto = document.querySelector('#add-photo')

addFormAlbum?.addEventListener('submit', async (event) => {
  event.preventDefault()
  const { title, method } = event.target

  const response = await fetch('/add/album', {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title.value,
    })
  })

  const data = await response.json()
  document.querySelector('.sucsess').innerText = data.message
  console.log("🚀 ~ addFormAlbum.addEventListener ~ data", data)
})

// addFormPhoto.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const { name, comment, action, method } = event.target

//   const response = await fetch(action, {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name: name.value,
//       comment: comment.value
//     })
//   })
//   const data = await response.json();
//   // document.querySelector('.sucsess').innerText = data.message

//   console.log("🚀 ~ addFormPhoto.addEventListener ~ data", data)
// })
