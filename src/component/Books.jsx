import { useState } from "react";

function Books(){

const [search, setSearch] = useState("");

const books = [
 {title:"The Notebook"},
 {title:"Dune"},
 {title:"Sherlock Holmes"}
];


const filteredBooks = books.filter((book)=>
 book.title.toLowerCase().includes(search.toLowerCase())
);


return(
 <div>

 <input
  type="text"
  placeholder="Search books..."
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
 />


 {filteredBooks.map((book)=>(
   <h3>{book.title}</h3>
 ))}

 </div>
)

}

export default Books;