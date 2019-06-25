var button = $('#fiction');
button.on("click", bookss);

function bookss(){
 event.preventDefault();
 var message = $('.Answer');

var ficbooks = ["Farenheit 451 by Ray Bradbury", "All the Light We Cannot See by Anthony Doerr", "The Fault in Our Stars by John Green", "Ready Player One by Ernest Cline", "The Handmaid's Tale by Margaret Atwood", "The Help by Kathryn Stockett"]

var randomBook = Math.random() * ficbooks.length;
var randomSug = Math.floor(randomBook);
message.text(`${ficbooks[randomSug]}`);
};

//_____________________________________________//

var button = $('#poetry');
button.on("click", booksss);

function booksss(){
 event.preventDefault();
 var message = $('.Answer');

var poebooks = ["Milk and Honey by Rupi Kaur", "Devotions by Mary Oliver", "Mountain Interval by Robert Frost", "The Strength in Our Scars by Bianca Sparacino", "Your Soul Is A River by Nikita Gill", "Salt Water by Brianna Wiest"]

var randomBook = Math.random() * poebooks.length;
var randomSug = Math.floor(randomBook);
message.text(`${poebooks[randomSug]}`);
}


//_____________________________________________//

var button = $('#fantasy');
button.on("click", bookssss);

function bookssss(){
 event.preventDefault();
 var message = $('.Answer');

var fanbooks = ["Harry Potter Series by J.K. Rowling", "The Chronicles of Narnia by C.S. Lewis", "Alice's Adventures in Wonderland by Lewis Carroll", "The Fellowship of the Ring by J.R.R. Tolkien", "Game of Thrones by George R.R. Martin", "A Wrinkle in Time by Madeleine L'Engle"]

var randomBook = Math.random() * fanbooks.length;
var randomSug = Math.floor(randomBook);
message.text(`${fanbooks[randomSug]}`);
}
