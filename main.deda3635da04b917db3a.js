(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,e,l){},QAVw:function(n,e,l){var t=l("mp5j");n.exports=(t.default||t).template({1:function(n,e,l,t,a){return'          <li class="info__item__text">\n            '+n.escapeExpression(n.lambda(e,e))+"\n          </li>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,l,t,a){var o,c,i=null!=e?e:n.nullContext||{},r=n.hooks.helperMissing,s="function",u=n.escapeExpression,m=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<h2 class="country-name">\n  '+u(typeof(c=null!=(c=m(l,"name")||(null!=e?m(e,"name"):e))?c:r)===s?c.call(i,{name:"name",hash:{},data:a,loc:{start:{line:2,column:2},end:{line:2,column:10}}}):c)+'\n</h2>\n<div class="info-content">\n  <ul class="info">\n    <li class="info__item">\n      <h3 class="info__item__caption">\n        Capital: \n      </h3>\n      <span class="info__item__text">\n        '+u(typeof(c=null!=(c=m(l,"capital")||(null!=e?m(e,"capital"):e))?c:r)===s?c.call(i,{name:"capital",hash:{},data:a,loc:{start:{line:11,column:8},end:{line:11,column:19}}}):c)+'\n      </span>\n    </li>\n    <li class="info__item">\n      <h3 class="info__item__caption">\n        Population: <br>\n      </h3>\n      <span class="info__item__text">\n        '+u(typeof(c=null!=(c=m(l,"population")||(null!=e?m(e,"population"):e))?c:r)===s?c.call(i,{name:"population",hash:{},data:a,loc:{start:{line:19,column:8},end:{line:19,column:22}}}):c)+'\n      </span>\n    </li>\n    <li class="info__item">\n      <h3 class="info__item__caption">\n        Languages: \n      </h3>\n      <ul class="info__item__list">\n'+(null!=(o=m(l,"each").call(i,null!=e?m(e,"languages"):e,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:27,column:8},end:{line:31,column:17}}}))?o:"")+'      </ul>\n    </li>\n  </ul>\n  <div class="flag-container">\n    <img src='+u(typeof(c=null!=(c=m(l,"flag")||(null!=e?m(e,"flag"):e))?c:r)===s?c.call(i,{name:"flag",hash:{},data:a,loc:{start:{line:36,column:13},end:{line:36,column:21}}}):c)+' alt="'+u(typeof(c=null!=(c=m(l,"name")||(null!=e?m(e,"name"):e))?c:r)===s?c.call(i,{name:"name",hash:{},data:a,loc:{start:{line:36,column:27},end:{line:36,column:35}}}):c)+' flag" class="country-flag" />\n  </div>\n  \n</div>'},useData:!0})},QfWi:function(n,e,l){"use strict";l.r(e);l("lmye"),l("x3Br"),l("D/wG"),l("fp7Y"),l("ZEAQ"),l("JBxO"),l("FdtR"),l("SgDD"),l("L1EO");var t=l("9va6"),a=l("vY5I");console.log(a({countries:["ru","uk"]}));var o=l("QAVw");console.log(o({}));var c=document.querySelector("header.header");console.log(c);var i=document.querySelector("#search-countries");console.log(i);var r=document.querySelector("#searchResultRoot");function s(n){return fetch("https://restcountries.eu/rest/v2/name/"+n).then((function(n){if(n.ok)return n.json();throw new Error("Error fetching data")})).then((function(n){return console.log(n),n})).then((function(n){return n.length>1?(r.textContent="",n):(function(n){var e=n[0];e.languages=n[0].languages.map((function(n){return n.name})),console.log(e);var l=o(e).trim();console.dir(l),r.textContent="",r.insertAdjacentHTML("beforeend",l)}(n),n)})).catch((function(n){console.error("Error: ",n),m}))}console.log(r);var u=t.debounce((function(){var n=i.value;""!=n&&s(n)}),1e3);i.addEventListener("input",u)},vY5I:function(n,e,l){var t=l("mp5j");n.exports=(t.default||t).template({1:function(n,e,l,t,a){return'    <li class="tcountries__item">\n      '+n.escapeExpression(n.lambda(e,e))+"\n    </li>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,l,t,a){var o,c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<ul class="countries">\n'+(null!=(o=c(l,"each").call(null!=e?e:n.nullContext||{},null!=e?c(e,"countries"):e,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:2,column:2},end:{line:6,column:11}}}))?o:"")+"</ul>"},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.deda3635da04b917db3a.js.map