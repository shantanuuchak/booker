export const booksReducer = (state: any, action: any) => {
  switch (action.type) {
    case "add":
      const book = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        author: action.payload.author,
        rating: 0,
      };
      return [book, ...state];
    case "remove":
      return state.filter((book) => book.id !== action.payload);
    case "like":
      console.log("hey");
      return state.map((book) => {
        if (book.id === action.payload) {
          return { ...book, rating: book.rating + 1 };
        }
        return book;
      });
    case "dislike":
      return state.map((book) => {
        if (book.id === action.payload) {
          return { ...book, rating: book.rating - 1 };
        }
        return book;
      });
    case "sort":
      return state.sort((a, b) => b.rating - a.rating);
    default:
      return state;
  }
};
