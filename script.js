let apiQuotes = [];
const newQuoteBtn = document.getElementById('quote');
// Show new Quotes

function newQuote() {
    // Pick a random quote from ApiQuotes array
    const quote =
        apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}
// Get Quotes From Api
async function getQuotes() {
    const apiUrl =
        'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) { }
}

// ON load
getQuotes();
