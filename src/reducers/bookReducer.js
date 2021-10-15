export default function booksReducer(state = {books: []}, action) {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return {books: action.payload}
    default:
      return state;
  }
}