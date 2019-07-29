import charactersWithImage from './characters_images';
import housesWithImages from './houses_images';

const mapUrlToName = dataArray => name => {
  const matchingData = dataArray.find(data => data.name === name);
  return matchingData ? matchingData.url : null
}

export const mapImageToCharacter = mapUrlToName(charactersWithImage);

export const mapImageToHouse = mapUrlToName(housesWithImages);
