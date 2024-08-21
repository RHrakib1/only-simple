import React from 'react';

const Book = ({ bookStor }) => {
    const {title}=bookStor
    return (
        <div>
            <h2>{title}</h2>

        </div>
    );
};

export default Book;