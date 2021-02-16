export function makeCountryInfo(infoArray) {
  if (infoArray == undefined || infoArray == null) return '';
  const info = infoArray[0];
  info.languages = infoArray[0].languages.map(({ name }) => name);
  // const infoMarkup = countryInfoTemplate(info).trim();
  return info;
}

export function makeCountriesList(infoArray) {
  if (infoArray == undefined || infoArray == null) return '';
  const list = { countries: infoArray.map(({ name }) => name) };
  // const listMarkup = countriesListTemplate(list).trim();
  return list;
}

// function showCountryInfo(response) {
//   const info = response[0];
//   info.languages = response[0].languages.map(({ name }) => name);
//   const infoMarkup = countryInfoTemplate(info).trim();
//   return infoMarkup;
// }

// function showCountries(response) {
//   const list = { countries: response.map(({ name }) => name) };
//   const listMarkup = countriesListTemplate(list).trim();
//   return listMarkup;
// }
