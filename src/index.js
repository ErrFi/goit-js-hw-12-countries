import './styles.css';
const _=require('lodash');
// load markup templates
const countriesListTemplate = require('./templates/countries-list.hbs');
console.log(countriesListTemplate({countries:["ru","uk"]}));

const countryInfoTemplate = require('./templates/country-info.hbs');
console.log(countryInfoTemplate({}));
// references

const headerRef = document.querySelector("header.header");
console.log(headerRef);
const searchRef = document.querySelector("#search-countries");
console.log(searchRef);
const resultRootRef = document.querySelector("#searchResultRoot");
console.log(resultRootRef);

// let countries = [];
// console.log(countries);
function showCountryInfo(response){
  const info = response[0];
  info.languages = response[0].languages.map(({name})=>name);
  console.log(info);
  const infoMarkup = countryInfoTemplate(info).trim();
  console.dir(infoMarkup);
  resultRootRef.textContent = '';
  resultRootRef.insertAdjacentHTML('beforeend',infoMarkup);
  return response;
};
function showCountryes(){};

function getCountries(search){
    return fetch(`https://restcountries.eu/rest/v2/name/${search}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(response => {
        console.log(response);
        return response;
    })
    .then(response=>{
      if(response.length>1) {return response;}
      showCountryInfo(response);
      return response;
    })
    // .then(showCountryInfo)
    .catch(err => {
        console.error("Error: ", err);
    });
}

function hndlSearchInput(){
    const country = searchRef.value;
    if (country!='')  getCountries(country); // do nothing if input is empty
};
const timeDebounce = 1000; // ms to wait after input puse
const hndlSearchInputDebounced = _.debounce(hndlSearchInput, timeDebounce);

searchRef.addEventListener('input', hndlSearchInputDebounced);


// const btn = document.querySelector(".js-get-data");
// const tBody = document.querySelector("table > tbody");
// btn.addEventListener("input", handleClick);
// Напишем функцию которая будет возвращать результат fetch (обещание) к указаному url
function getCurrencyRates() {
    return fetch(
      "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
    )
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Error fetching data");
      })
      .catch(err => {
        console.error("Error: ", err);
      });
  }



// Получает массив объектов валют и рендерит результат
function updateView(currencies) {
  const htmlString = currencies.reduce(
    (acc, currency) => acc + createTableRow(currency),
    ""
  );

  tBody.innerHTML = htmlString;
}

// При клике вызовем getCurrencyRates и после того как
// обещание выполнятся, внутри then отрендерим результат по шаблону
function handleClick() {
  getCurrencyRates().then(updateView);
  
}

function createList(countries) {
  return `
    <ul class="counties">
      <li class="country">${country.name}</li>
      <td>${Number(buy).toFixed(2)}</td>
      <td>${Number(sale).toFixed(2)}</td>
    </ul>
  `;
}
