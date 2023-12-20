const randImage = document.querySelector('#rand-image')
const images = ["1.jpg","2.jpg","3.jpg"]

const selectedImage = images[Math.floor(Math.random() * images.length)]

const img = document.createElement("img")
img.setAttribute("src",`images/${selectedImage}`)
img.style.width='100%'
img.style.height='100vh'
img.style.zIndex='-999'

randImage.appendChild(img)
