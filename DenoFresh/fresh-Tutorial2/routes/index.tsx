import Axios from "npm:axios";

type Character = {
  id: number;
  name: string;
};

type Data = {
  results: Character[];
};

export default async function Home() {
  try {
    const characters = await Axios.get<Data>(
      "https://rickandmortyapi.com/api/character",
    );

    return (
      <div>
        <hl>Personajes de Rick & Morty</hl>
        <ul>
          {characters.data.results.map((ch) => {
            return <li key={ch.id}>{ch.name}</li>;
          })}
        </ul>
      </div>
    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}
