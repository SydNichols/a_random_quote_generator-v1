/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/

//these quotes are from some of my favorite TV shows. Some will be silly, some will be inpirational, all make me laugh! The quotes array will be directly called in the printQuotes function to be passed into the getRandomQuote function.

let quotes = [
  {
    quote: 'There are no bad ideas... only great ideas that go horribly wrong',
    source: 'Jack Donaghy (Alec Baldwin)',
    citation: "30 Rock; Let's Stay Together",
    tags: ['humor', 'business']
  },
  {
    quote: "You miss 100% of the shots you don't take. - Wayne Gretzky",
    source: 'Michael Scott (Steve Carell)',
    citation: 'The Office; Michael Scott Paper Company',
    tags: ['humor', 'motivation']
  },
  {
    quote: "You can't just give up. Is that what a dinosaur would do?",
    source: 'Joey Tribbiani (Matt LeBlanc)',
    tags: ['humor', 'motivation']
  },
  {
    quote: "Don't start chasing applause and acclaim. That way lies madness.",
    source: 'Ron Swanson (Nick Offerman)',
    year: '2012',
    tags: ['wisdom']
  },
  {
    quote: "If you love something, set it free. Unless it's a tiger.",
    source: 'Phil Dunphy (Ty Burrell)',
    citation: 'Modern Family; See You Next Fall',
    tags: ['humor', 'love']
  }
]

/***
 * `bgColorPalette` array
 * color palettes chosen from 'https://palettemaker.com/app'
 ***/

let colorPalette = [
  { 
    backgroundColor: '#bd9e84', 
    textColor: '#c5dfdf' 
  },
  { 
    backgroundColor: '#a71666', 
    textColor: '#d31638' 
  },
  { 
    backgroundColor: '#d31638', 
    textColor: '#bd9e84' 
  },
  {
    backgroundColor: '#c5dfdf', 
    textColor: '#a71666' 
  },
  { 
    backgroundColor: '#e68815', 
    textColor: '#d31638' 
  }
];

/***
 * `getRandomQuote` function
 ***/
/*
 getRandomQuote takes in an array argument. 
the function will first choose a random number that is between 1 and the length of the array. 
It will then return an object at the randomNumber index of the array 
 @param {arr} array - an array of quote object.
 */

getRandomQuote = (arr) => {
  let randomNumber = Math.floor(Math.random() * arr.length)

  return arr[randomNumber]
}

/***
 * `getRandomColor` function
 * this function will choose a random color palette object for the background and text from the colorPalette array
 */
getRandomColor = () => {
  let colorNumber = Math.floor(Math.random() * colorPalette.length);
  return colorPalette[colorNumber];

}



/***
 * `printQuote` function
 ***/

//printQuote will set a variable to store the getRandomQuote function and directly pass in the quotes array. the html will store the string literal that will be inserted into the html

printQuote = () => {
  let randomQuote = getRandomQuote(quotes)

  let html = `<p class="quote">${randomQuote.quote}</p>
                <p class="source">${randomQuote.source}`
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`
  }  
  html += '</p>'

  let newColors = getRandomColor();
  
  document.body.style.backgroundColor = newColors.backgroundColor;
  document.getElementById('quote-box').style.color = newColors.textColor;

  document.getElementById('quote-box').innerHTML = html

  console.log(randomQuote.quote)
  console.log(randomQuote.source)
  console.log(html)
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false)
