const allBooks = [
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        image: "https://example.com/harry_potter.jpg", 
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://example.com/hobbit.jpg", 
        alreadyRead: false
    }
];

const listBooks = document.querySelector('.listBooks');
allBooks.forEach(book => {
    const bookDiv = document.createElement('div');
    const bookDetails = document.createElement('p');
    bookDetails.textContent = `${book.title} by ${book.author}`;

    if (book.alreadyRead) {
        bookDiv.style.color = 'red';
    }

    const img = document.createElement('img');
    img.src = book.image;
    img.style.width = '100px';

    bookDiv.appendChild(img);
    bookDiv.appendChild(bookDetails);

    listBooks.appendChild(bookDiv);
});
