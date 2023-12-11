
index=0
var QuoteList = [
    {'author': 'Jim Rohn', 'quote': 'Beware of what you become in pursuit of what you want.'},
    {'author': 'Epictetus', 'quote': 'It\'s not what happens to you, but how you react to it that matters.'},
    {'author': 'Frank Sinatra', 'quote': 'The best revenge is massive success.'},
    {'author': 'Wayne Gretzy', 'quote': 'You miss 100% of the shots you don\'t take.'},
    {'author': 'Nelson Mandela', 'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'},
    {'author': 'Elbert Hubbard', 'quote': 'Do not take life too seriously. You will not get out alive.'},
];


function displayQuote() {
    var tempQuote = '';
    var tempAuthor = '';

    index = Math.floor(Math.random() * QuoteList.length);
    tempQuote += '<p>' + QuoteList[index].quote + '</p>';
    tempAuthor += '<p>' + QuoteList[index].author + '</p>';

    
    document.getElementById("demo1").innerHTML = tempQuote;
    document.getElementById("demo2").innerHTML = tempAuthor;
}