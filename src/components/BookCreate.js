
import { useState } from "react";
function BookCreate({ onCreate }){
   const [text, setText] =  useState('')

   const handleChange = (event) => {
    // console.log(event.target.value);
    setText(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      onCreate(text);
      setText('');
   }
    return(
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Text</label>
                <input className="input" value={text} onChange={handleChange}/>
                <button className="button">Creat!</button>
            </form>
        </div>
    )
}

export default BookCreate;