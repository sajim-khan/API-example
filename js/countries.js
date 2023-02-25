const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = countries => {
    const countriesInfo = document.getElementById('all-countries')
    // for (const info of countries) {
    //     console.log(info);
    // }
    countries.forEach(country => {
        console.log(country.name.common);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        
        countryDiv.innerHTML = `
            <h4>Name: ${country.name.common} </h4>
            <h4>Capital: ${country.capital ? country.capital[0] : 'no capital'} </h4>
        `
        countriesInfo.appendChild(countryDiv);
    })
    
}
loadCountries()
