import React from 'react'

export type Book = {
    id: number;
    image: string;
    title: string;
    name: string;
}

type BookCardProps = Pick<Book, "image" | "title" | "name">

export const BookCard = ({ image, title, name }: BookCardProps) => {
    return (
        <div>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <h2>{name}</h2>
        </div>
    )
}
