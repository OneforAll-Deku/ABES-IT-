import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Book from './Book';
import Login from './component/Login';
import Register from './component/Register';
import Navbar from './Navbar';
import './App.css';

const sampleBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "/covers/gatsby.svg",
    description: "A classic American novel set in the summer of 1922, following the story of Jay Gatsby.",
    price: 12.99
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "/covers/mockingbird.svg",
    description: "A gripping tale of racial injustice and childhood innocence in the American South.",
    price: 14.99
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    coverImage: "/covers/nineteen-eighty-four.svg",
    description: "A dystopian social science fiction novel and cautionary tale about totalitarianism.",
    price: 13.99
  }
];

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <div className="book-collection">
              {sampleBooks.map(book => (
                <div className="book-card-container" key={book.id}>
                  <Book book={book} />
                </div>
              ))}
            </div>
          } />
        </Routes>
      </div>
    </>
  );
}

export default App;