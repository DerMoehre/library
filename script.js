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

function clearInput () {
    document.getElementById('input_title').value = '';
    document.getElementById('input_author').value = '';
    document.getElementById('input_page').value = '';
    document.getElementById('input_read').checked = false;
}

function toggleDisplay () {
    let bgContainer = document.querySelector('.bg_container');
    bgContainer.classList.toggle('d_none');
}

function toggleRead (index) {
    myLibrary[index].read  = !myLibrary[index].read;
    renderBook();
}

function closeButton () {
    let closeButton = document.querySelector('.btn_remove');
    closeButton.addEventListener('click', () => {
        toggleDisplay();
        clearInput();
    });
}

function openInput () {
    let addButton = document.querySelector('.new_book');
    addButton.addEventListener('click', () => {
        toggleDisplay();
    });
}

function submit() {
    let readStatus = false;
    let submitButton = document.querySelector('.btn_submit');
    submitButton.addEventListener('click', () => {
        let title = document.getElementById('input_title').value;
        let author = document.getElementById('input_author').value;
        let page = document.getElementById('input_page').value;
        let read = document.getElementById('input_read');
        if (read.checked) {
            readStatus = true;
        }
    addBookToLibrary(title, author, page, readStatus);
    clearInput();
    toggleDisplay();
    });
}

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary(title, author, page, read) {
    const newBook = new Book(title, author, page, read);
    myLibrary.push(newBook);
    renderBook();
}

function renderBook() {
    let bookContent = document.querySelector('.book_content');
    bookContent.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        bookContent.innerHTML += generateBookCardHtml(i, myLibrary[i].title, myLibrary[i].author, myLibrary[i].page, myLibrary[i].read);
    }
}

function generateBookCardHtml(index, title, author, page, read) {
    return `
    <div class="book">
        <p class="title">${title}</p>
        <p class="author">${author}</p>
        <p class="pages">${page}</p>
        <button onclick="toggleRead(${index})" class="read ${read}">Read</button>
        <button class="remove">Remove</button>
    </div>
`;
}

openInput();
submit();
closeButton();
renderBook();