const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
    .catch(error => console.log(error))
}

const loadQuote2 = async() => {
    const url = `https://api.kanye.rest/`
    try{
        const res = await fetch(url)
        const data = await res.json()
        displayQuote(data)
    }
    catch(error){
        console.log(error);
    }    
}

function displayQuote(quote) {
    const quoteContainer = document.getElementById('quotes')
    quoteContainer.innerHTML = quote.quote
}

loadQuote();
  
