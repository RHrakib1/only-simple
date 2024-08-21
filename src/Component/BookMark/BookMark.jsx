import React from 'react';
import Book from '../Book/Book'

const BookMark = ({ bookM, addtime }) => {
    return (
        <div>
            <h1>{addtime} minit</h1>
            <h2>Bookmaqrk; {bookM.length}</h2>
            {
                bookM.map((copyBookM, idx) => <Book key={idx} bookStor={copyBookM}></Book>)
            }

        </div>
    );
};

export default BookMark;