function toggleMode() {
  const html = document.documentElement

  //Alterar classse da tag HTML
  html.classList.toggle("light")

  //Substituir imagem
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.jpeg")
  } else {
    img.setAttribute("src", "./assets/avatar1.png")
  }
}

// if (html.classList.contains("light")) {
//   html.classList.remove("light")
// } else {
//   html.classList.add("light")
// }
