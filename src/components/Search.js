const Search = (props) => {
  // search bar will navigate us to a new URL when the search is done.
  const {search} = window.location
  const query = new URLSearchParams(search).get('book-search')
  const books = props.books
 

  const filterBooks = (books, query) => {

    return books.filter((book) => {
      const bookTitle = book.attributes.title.toLowerCase();
      return bookTitle.includes(query)
    })
  }

  const filteredBooks = filterBooks(books, query)

  return (
    <div>
      <form action='/' method='get' autoComplete="off">
        <label htmlFor='book-search'>Find a Book: </label>
        <input type='text' id='book-search' placeholder='Title' name='book-search' />
        <button type="submit">Search</button>
      </form>

      <ul>
        {filteredBooks.map(book => (
          <li key={book.attributes.id}>{book.attributes.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Search;