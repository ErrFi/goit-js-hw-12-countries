import './styles.css';
const _ = require('lodash');
const { alert, notice, info, success, error } = require('@pnotify/core');

import getCountriesAsync from './components/fetchCountries.js';
import {makeCountryInfo, makeCountriesList} from './components/markupCountriesGen.js';

// load markup templates
const countriesListTemplate = require('./templates/countries-list.hbs');
console.log(countriesListTemplate({ countries: ['ru', 'uk'] }));

const countryInfoTemplate = require('./templates/country-info.hbs');
console.log(countryInfoTemplate({}));
// references

const headerRef = document.querySelector('header.header');
console.log(headerRef);
const searchRef = document.querySelector('#search-countries');
console.log(searchRef);
const resultRootRef = document.querySelector('#searchResultRoot');
console.log(resultRootRef);

// let countries = [];
// console.log(countries);
function showCountryInfo(info) {
  console.log(info);
  if(info.length!==1) return info;
  const infoMarkup = countryInfoTemplate(makeCountryInfo(info)).trim();
  // console.dir(infoMarkup);
  resultRootRef.textContent = '';
  resultRootRef.insertAdjacentHTML('beforeend', infoMarkup);
  return info;
}
function showCountries(info) {
  if((info.length < 2) || (info.length > 10)) return info;
  const listMarkup = countriesListTemplate(makeCountriesList(info)).trim();
  resultRootRef.textContent = '';
  resultRootRef.insertAdjacentHTML('beforeend', listMarkup);
  return info;
}
function showAllert(info){
  if((info.length <= 10) ) return info;
  resultRootRef.textContent = '';
  //show allert
  console.warn('Be more specific...');
            const myAlert = alert({
            text: 'Too much results! Make request more specific ...',
            type: 'info',
          });
  return info;
}

function hndlSearchInput() {
  const country = searchRef.value;
  if (country != '' && country != undefined) {
    console.log('GetCountriesAsync....\n');
    getCountriesAsync(country)
      .then(res=>(res!=undefined)?res:Promise.reject('No matches found...'))
      // .then(result =>{ console.log(result); return result})
      .then(showCountryInfo)
      .then(showCountries)
      .then(showAllert)     
      .catch(error => console.log("Oops!...\n",error));
  } // do nothing if input is empty

}
const timeDebounce = 1000; // ms to wait after input puse
const hndlSearchInputDebounced = _.debounce(hndlSearchInput, timeDebounce);

searchRef.addEventListener('input', hndlSearchInputDebounced);
