const quotes = [
  {
    quote: "Our Greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "  - Thomas Edison",
  },
  {
    quote: "Some people dream of success, while other people get up every morning and make it happen.",
    author: "  - Wayne Huizenga",
  },
  {
    quote: "The only thing worse than starting something and failing is not starting something.",
    author: "  - Seth Godin",
  },
  {
    quote: "If you relly want to do something, you'll find a way. If you do not, you'll find an excuse.",
    author: "  - Jim Rohn",
  },
  {
    quote: "The road to success and the road to failure are almost exactly the same.",
    author: "  - Colin R. Davis",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "  - Walt Disney",
  },
  {
    quote: "In order to succeed, we must first believe that we can.",
    author: "  - Nikos Kazantzakis",
  },
  {
    quote: "Being happy never goes out of style",
    author: "  - Lily Pulitzer",
  },
  {
    quote: "Life is either a great adventure or nothing",
    author: "  - Helen Keller",
  },
  {
    quote: "All you need in this life is ignorance and confidence; then success is sure",
    author: "  - Mark Twain",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have",
    author: "  - Thomas Jefferson",
  },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;

quote.classList.add("quote_span");
author.classList.add("author_span");