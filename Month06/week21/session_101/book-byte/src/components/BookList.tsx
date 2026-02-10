import React from "react";
import { BookCard, type Book } from "./BookCard";

type BookListProps = {
    books?: Book[];
}

const BookList = ({ books = [] }: BookListProps) => {
    return (
        <div>
            {books.map((b) => (
                <BookCard key={b.id} image={b.image} title={b.title} name={b.name} />
            ))}
        </div>
    )
}

export default BookList


