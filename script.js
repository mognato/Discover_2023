function toggleMode(){
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  
  if(html.classList.contains('light')){
    html.classList.remove('light')
    img.setAttribute('src',"./assets/editada.jpg")
  } else {
    html.classList.add('light')
    img.setAttribute("src", "./assets/sol.jpg")
  }
}