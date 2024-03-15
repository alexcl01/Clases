import { FunctionComponent } from "preact";
import { BooksResponse, useState } from "preact/hooks";
import Books from "../components/Books.tsx";

const BooksCSR: FunctionComponent = () => {
  const fetchBooks = async () => {
    const response = await fetch("/api/getbooks");
    if (response.status === 200) {
      const data = await response.json();
      setBooks(data);
    }
  };

  const [books, setBooks] = useState<BooksResponse | undefined>(undefined);

  return (
    <div>
      <button onClick={fetchBooks}>Cargar Libros</button>
      {books && <Books docs={books.docs} />}
    </div>
  );
};

export default BooksCSR;
