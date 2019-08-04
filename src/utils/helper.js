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

export const filterDataWithInput = (dataArray, searchInput) => {
  return dataArray.filter(item => {
    if (item.spell) return item.spell.toLowerCase().includes(searchInput.toLowerCase());
    if (item.alias) return item.name.toLowerCase().includes(searchInput.toLowerCase()) || item.alias.toLowerCase().includes(searchInput.toLowerCase());
    return item.name.toLowerCase().includes(searchInput.toLowerCase())
  })
};


export const generateHouseColor = houseName => {
  switch (houseName.toLowerCase()) {
    case 'gryffindor':
      return '#8d0000';
    case 'slytherin':
      return '#005416';
    case 'ravenclaw':
      return '#004e80';
    case 'hufflepuff':
      return '#f2b800';
    default:
      return 'none';
  }
}

export const findCharacterById = (id, characters) => characters.find(character => character._id === id);

export const isUnknown = attribute => attribute ? attribute : 'Unknown';