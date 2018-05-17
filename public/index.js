import { showcharacters } from './component/showcharacters.js'

fetch('https://akabab.github.io/starwars-api/api/all.json')
    .then(response => response.json())
    .then(fetchcharacters => {
        // characters = fetchcharacters
        console.log(fetchcharacters)
        rendercharacters(fetchcharacters)
        // console.log(fetchcharacters)
    })
    .catch(err => console.error(err))

const rendercharacters = characters => {
  const alumnisElement = document.getElementById('block_alumnis')
  const alumniElements = characters.map(showcharacters).join('')
  alumnisElement.innerHTML = alumniElements

  // const nbElement = document.getElementById('nb_alumni')
  // nbElement.innerHTML = `
  //   <p class="soustitre">${alumnis.length} membres correspondent à votre recherche</p>

  // `
}

