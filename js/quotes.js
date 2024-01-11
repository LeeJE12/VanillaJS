const quotes = [
    {
        quote : "first",
        author : "Walt Disney",
    }, 
    {
        quote : "second",
        author : "Walt Disney",
    }, 
    {
        quote : "third",
        author : "Walt Disney",
    }, 
    {
        quote : "fourth",
        author : "Walt Disney",
    },
    {
        quote : "fifth",
        author : "Walt Disney",
    }, 
    {
        quote : "sixth",
        author : "Walt Disney",
    }, 
    {
        quote : "seventh",
        author : "Walt Disney",
    }, 
    {
        quote : "eighth",
        author : "Walt Disney",
    }, 
    {
        quote : "nineth",
        author : "Walt Disney",
    }, 
    {
        quote : "tenth",
        author : "Walt Disney",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;