document.addEventListener('DOMContentLoaded', function(){
 console.log("loaded")
});

//fetchBooks() function is called when index.html is loaded
//inside the function is a fetch request
function fetchBooks(renderBooks) {
  fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  // the return response should be converted to JSON
  .then(json => console.log(json));

  return fetch();
   // To pass the tests, don't forget to return your fetch!
}
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}