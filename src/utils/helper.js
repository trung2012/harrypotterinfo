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
    if (item.spell) return item.spell.toLowerCase().includes(searchInput);
    if (item.alias) return item.name.toLowerCase().includes(searchInput) || item.alias.toLowerCase().includes(searchInput);
    return item.name.toLowerCase().includes(searchInput)
  })
};