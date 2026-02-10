
import './App.css'
import { BookCard } from './components/BookCard'
import BookList from './components/BookList'
import Header from './components/header'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <>
      <Header title="BookByte" />
      <HeroSection />
      <BookList books={[
        { id: 1, image: "images/book1.svg", title: "The Great Gatsby", name: "F. Scott Fitzgerald" },
        { id: 2, image: "images/book2.svg", title: "To Kill a Mockingbird", name: "Harper Lee" },
        { id: 3, image: "images/book3.svg", title: "1984", name: "George Orwell" },
        { id: 4, image: "images/book4.svg", title: "Pride and Prejudice", name: "Jane Austen" },
        { id: 5, image: "images/book5.svg", title: "The Catcher in the Rye", name: "J.D. Salinger" },
        { id: 6, image: "images/book6.svg", title: "The Hobbit", name: "J.R.R. Tolkien" },
      ]} />
    </>
  )
}

export default App
