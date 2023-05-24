import './index.css'
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';

function App(){
    const [books, setBooks] = useState([])
    
    const createBook = (title) => {
      //    console.log("Need to add book: ", title)
      // BAD CODE !
    //   books.push({ id: 1, title: title})
      
       const updateBooks = [
        ...books,
        {id : Math.round(Math.random() * 999),
        title: title
        }
       ]

       setBooks(updateBooks);
    }

    const deleteBookById = (id) => {
        const updateBooks = books.filter((book) => {
            return book.id !== id

        })

        setBooks(updateBooks);
    }

    const editBookById = (id, newTitle) => {
        const updateBooks = books.map((book) => {
            if(book.id === id){
                return {...book, title : newTitle}
            }

            return book;
        }) 

        setBooks(updateBooks);
    }

    return(
        <div className='app'>
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
            <BookCreate onCreate={createBook}/>
        </div>
    )
}

export default App;