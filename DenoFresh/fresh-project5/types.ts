export type Book = {
    _id: string;
    name: string;
}

export type BooksResponse = {
    docs: Book[]
}