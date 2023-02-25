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
        console.log(country.cca2);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
            <h4>Name: ${country.name.common} </h4>
            <h4>Capital: ${country.capital ? country.capital[0] : 'no capital'} </h4>
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        countriesInfo.appendChild(countryDiv);
    })    
}

const loadCountryDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    //console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]))
}

const showCountryDetails = details => {
    const countryDetails = document.getElementById('country-details')
    countryDetails.innerHTML = `
    <h2>Country Detail</h2>
    <h3>Name: ${details.name.common}</h3>
    <p>Capital: ${details.capital}</p>
    <img src="${details.flags.png}" alt="">
    `
}

loadCountries()
