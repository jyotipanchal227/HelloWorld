function Book(genre, title, author, published, hasMovie) {
        this.genre = genre;
        this.title = title;
        this.author = author;
        this.published = published;
        this.hasMovie = hasMovie;
    };

Book.prototype.display = function(){
    console.log(this);
}

Book.prototype.toString = function(){
    var book = this.genre + " : " + this.title + " by " + this.author + ", published in " + this.published;
     if (this.hasMovie) {
            book += ", has a Movie.";
        }
        return book;
}

 window.onload = function() {
        var books = [ ];
        books[0] = new Book("Quest", "Alchemist", "Alchemist", 1892, false);
        books[1] = new Book("Fiction", "Who Moved My Cheese", "Spencer Johnson", 1887, false);
        books[2] = new Book("Biography", "Steve Jobs", "Walter Isaacson", 2011, true);
        books[3] = new Book("Biography", "Into the Wild", "Jon Krakauer", 1997, true);
		
        for (var i = 0; i < books.length; i++) {
            addToPage(books[i]);
			books[i].display();
        }
		
    };

    function addToPage(book){
        var bookList = document.getElementById("books");
        var bookItem = document.createElement("li");
        bookItem.innerHTML = book.toString();
        bookList.appendChild(bookItem);
    }
