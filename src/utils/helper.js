import charactersWithImage from './characters_images';
import housesWithImages from './houses_images';
import spells from './spells_images';

const mapDataToName = dataArray => name => {
  const matchingData = dataArray.find(data => data.name.trim() === name.trim());
  return matchingData ? matchingData : null;
}

export const mapDataToCharacter = mapDataToName(charactersWithImage);

export const mapDataToHouse = mapDataToName(housesWithImages);

export const mapDataToSpell = mapDataToName(spells);

export const isExisting = (attribute) => attribute ? attribute : 'Unknown';

export const filterCharactersWithInput = (characters, searchInput) => {
  return characters.filter(character => {
    if (character.alias) {
      return character.name.toLowerCase().includes(searchInput) || character.alias.toLowerCase().includes(searchInput);
    }
    return character.name.toLowerCase().includes(searchInput)
  })
};
