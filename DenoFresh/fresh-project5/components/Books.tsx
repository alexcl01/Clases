import { FunctionComponent } from "preact";
import { Book } from "../types.ts";

type BooksProps = {
  docs: Book[];
};

const Books: FunctionComponent<BooksProps> = (props) => {
  const books = props.docs;
  return (
    <div>
      {books.map((b) => <div key={b._id}>{b.name}</div>)}
    </div>
  );
};

export default Books;