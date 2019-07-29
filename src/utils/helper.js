import charactersWithImage from './characters_images';
import housesWithImages from './houses_images';
import spells from './spells_images';

const mapUrlToName = dataArray => name => {
  const matchingData = dataArray.find(data => data.name.trim() === name.trim());
  return matchingData ? matchingData.url : null
}

export const mapImageToCharacter = mapUrlToName(charactersWithImage);

export const mapImageToHouse = mapUrlToName(housesWithImages);

export const mapImageToSpell = mapUrlToName(spells);

export const isExisting = (attribute) => attribute ? attribute : 'Unknown';