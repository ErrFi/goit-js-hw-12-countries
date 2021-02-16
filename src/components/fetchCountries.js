
export default async function getCountriesAsync(search){
    try {
       return await fetch(`https://restcountries.eu/rest/v2/name/${search}`)
        .then(resp=>(resp.ok)
        ?resp.json()
        :Promise.reject('not found '+ resp.status))
        .catch((err)=>{console.warn(err)});
      //   console.log("getCountriesAsync:\n",result);

        // return result;
      } catch (err) {
          console.log("Error catched......");
        throw err;
      }
}