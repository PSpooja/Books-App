import BookShow from "./BookShow";

function BookList( {books, onDelete, onEdit} ){
   const rederedBooks = books.map((book) => {
     return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>
   })
    return(
        <div className="book-list">{rederedBooks}</div>
    )
}

export default BookList;