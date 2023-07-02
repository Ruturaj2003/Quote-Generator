const quoteContainer = document.getElementById(
    'quote-container'
);
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show new Quotes

function newQuote() {
    // Pick a random quote from ApiQuotes array
    const quote =
        apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // Check for Null Val of Author
    if (!quote.author) {
        authorText.innerText = 'Unkown';
    } else {
        authorText.innerText = quote.author;
    }

    // Chwck Quote Length to determine styling {
    if (quote.text.length > 150) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.innerText = quote.text;
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

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
// ON load
getQuotes();
