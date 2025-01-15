"use client";

import { useEffect, useReducer } from "react";
import { booksReducer } from "@/lib/reducer";
import { initialBooks } from "@/lib/sample-data";

import AddBook from "@/components/AddBook";
import BookList from "@/components/BookList";
import Hero from "@/components/Hero";

// Get books from localStorage
const getBooksFromLocalStorage = () => {
  const savedBooks = localStorage.getItem("books");
  return savedBooks ? JSON.parse(savedBooks) : initialBooks;
};

// Set books to localStorage
const saveBooksToLocalStorage = (books: Book[]) => {
  localStorage.setItem("books", JSON.stringify(books));
};

function Page() {
  const [books, dispatch] = useReducer(booksReducer, [], () =>
    getBooksFromLocalStorage()
  );

  useEffect(() => {
    saveBooksToLocalStorage(books);
  }, [books]);

  return (
    <>
      <Hero />
      <hr className="mb-10" />
      <main className="max-w-7xl mx-auto px-2 text-2xl">
        <AddBook dispatch={dispatch} />
        <BookList books={books} dispatch={dispatch} />
      </main>
    </>
  );
}

export default Page;
