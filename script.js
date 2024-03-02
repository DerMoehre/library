const myLibrary = [
    {
        title: 'Duden',
        author: 'Langenscheid',
        page: 450,
        read: true,
    },
    {
        title: 'Duden2',
        author: 'Langenscheid2',
        page: 4502,
        read: false,
    }
];

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary(title, author, page, read) {
    const newBook = new Book(title, author, page, read);
    myLibrary.push(newBook);
}

function renderBook() {
    let bookContent = document.querySelector('.book_content');
    for (let i = 0; i < myLibrary.length; i++) {
        bookContent.innerHTML += generateBookCardHtml(myLibrary[i].title, myLibrary[i].author, myLibrary[i].page, myLibrary[i].read);
    }
}

function generateBookCardHtml(title, author, page, read) {
    return `
    <div class="book">
        <p class="title">${title}</p>
        <p class="author">${author}</p>
        <p class="pages">${page}</p>
        <button class="read ${read}">Read</button>
        <button class="remove">Remove</button>
    </div>
`;
}

renderBook();