class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isnb = isbn;
  }

}

class UI {
    addBooktoList(book) {

            const list = document.getElementById('book-list');
            
            // Create tr element
            const row = document.createElement('tr');
            // Insert cols
            row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class ="delete">X<a> </td>
            `;

            list.appendChild(row);
      
    }

    showAlert(message, className) {
            // create div
            const div = document.createElement('div')
            // Add classes
            div.className = `alert ${className}`;
            //Add tex
            div.appendChild(document.createTextNode (message));
            // Get parent
            const container = document.querySelector('.container');
            // Get form
            const form = document.querySelector('#book-form');
            // Insert alert
            container.insertBefore(div, form);

            // Time out after 3 secs
            setTimeout (function() {
              document.querySelector('.alert')
              .remove();  
            }, 3000);
    }

    deleteBook(target) {
          if(target.className == 'delete') {
            target.parentElement.parentElement.remove();
          }
    }

    clearFields() {
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
    }

}


// Even Listner for adding a book
document.getElementById('book-form').addEventListener('submit',
function(e) {
//Get form values

  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

// Initiate book
   const book = new Book (title, author, isbn);
// Initiate UI
  const ui = new UI();
  console.log(ui);
  // Validate
  
  if(title === '' || author === '' || isbn === '' ) {
    ui.showAlert('Please fill in all fields', 'error');    
  } else {
  
  // Add a book to a list
  ui.addbooktoList(book);

  //Show success
  ui.showAlert('Book Added !', 'success');
  // Clear fields
  
  ui.clearfields();

  }

e.preventDefault(e);
}

);

// Event Listner for delete 

document.getElementById('book-list').addEventListener('click', function(e) {
  // Initiate UI
  const ui = new UI();
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book removed !', 'success');
  
  e.preventDefault();
});