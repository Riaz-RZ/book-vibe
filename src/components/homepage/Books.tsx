import React from 'react';


const getBooks = async() =>{
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = await res.json();
    return data;
}
const Books = async() => {
    const booksData = await getBooks();
    console.log(booksData);
    return (
        <div>
            <h1>Books</h1>
        </div>
    );
};

export default Books;