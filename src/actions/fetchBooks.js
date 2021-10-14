// action creator
export function fetchBooks() {
  fetch('http://localhost:3001/api/v1/books')
      .then(response => response.json())
      .then(data => console.log(data))
}