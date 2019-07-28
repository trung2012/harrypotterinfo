import charactersWithImage from './characters_images';

export const mapImageToCharacter = (name) => {
  const matchingCharacter = charactersWithImage.find(character => character.name === name);
  return matchingCharacter ? matchingCharacter.url : null
}

