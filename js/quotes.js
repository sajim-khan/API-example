const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

function displayQuote(quote) {
    const quoteContainer = document.getElementById('quotes')
    quoteContainer.innerHTML = quote.quote
}

loadQuote();