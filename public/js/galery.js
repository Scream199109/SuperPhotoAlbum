const addFormAlbum = document.querySelector('#add-album');
const addFormPhoto = document.querySelector('#add-photo')

addFormAlbum.addEventListener('submit', async (event) => {
  event.preventDefault()

  const {title,action,method} = event.target

  const response = await fetch (action,{
    method,
    header:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      title: title.value
    })
  })

  const data = await response.text()
  

})
