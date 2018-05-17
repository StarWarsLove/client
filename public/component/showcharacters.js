export const showcharacters = characters => {
  return `
    <a href="profile.html?id=${characters.id}" class="alumni" id="alumni-${characters.id}">
      <div class="liste_alumnis">
        <img src="${characters.image}" id="image" class="img-members">
        <h4 id="name" class="member-name">Name:${characters.name}</h4>
        <p id="gender" class="gender">Gender: ${characters.gender}</p>
        <p id="height" class="gender">Height: ${characters.height}</p>
        <p id="eyeColor" class="gender">Eyes color: ${characters.eyeColor}</p>
        <p id="hairColor" class="gender">Hair color: ${characters.hairColor}</p>
        <p id="bornLocation" class="gender">Born location: ${characters.bornLocation}</p>
        <p id="mass" class="gender">Mass: ${characters.mass}</p>
        <p id="species" class="gender">Species: ${characters.species}</p>

      </div>
    </a>
  `
}