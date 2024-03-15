import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import axios from "npm:axios";

// Búsqueda por personaje; al buscar por nombre sale una lista con todos los personajes de Rick&Morty que coincidan
const Character: FunctionalComponent = () => {
  const [name, setName] = useState<string>("");
  const [characters, setCharacters] = useState<string[]>([]);

  const onSearch = async (searchText: string): Promise<void> => {
    const url = `https://rickandmortyapi.com/api/character/?name=${searchText}`;
    const response = await axios.get<{ results: { name: string }[] }>(url);
    const names = response.data.results.map((r) => r.name);
    setCharacters(names);
  };

  // onInput - de esta forma la página se recarga cada vez que se escribe una letra. NO hay botón
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Character name"
          value={name}
          onInput={(e) => {
            setName(e.currentTarget.value);
            onSearch(e.currentTarget.value);
          }}
        />
      </form>
      {characters.length > 0 && characters.map((n) => <div key={n}>{n}</div>)}
    </div>
  );
};

export default Character;
