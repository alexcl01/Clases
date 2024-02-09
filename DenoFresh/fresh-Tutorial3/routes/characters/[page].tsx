// sacar todos los personajes de cada página de rick y morty
// se puede navegar entre páginas

import Axios from "npm:axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

export type Character = {
    id: number;
    name: string;
    image: string;
    status: string;
};

export type CharacterPage = {
    info: {
      count: number;
      pages: number;
      next: string;
      prev: string;
    };
    results: Character[];
};

type Data = CharacterPage & { page: string };

export const handler: Handlers<Data> = {
  async GET(_req: Request, ctx: FreshContext<unknown, Data>) {
    const { page } = ctx.params;
    const response = await Axios.get<CharacterPage>(`https://rickandmortyapi.com/api/character?page=${page}`);
    if (response.status !== 200) {
      console.error(
        "Ha habido un error",
        response.status,
        response.statusText,
      );
      throw new Error("Ha habido un error");
    }
    return ctx.render({ ...response.data, page });
  },
};

const Page = (props: PageProps<Data>) => {
  const { info, results, page } = props.data;
  return (
    <>
      <h1>Página {page}</h1>
      {parseInt(page) > 1 && ( <a href={`/characters/${parseInt(page) - 1}`}>Anterior página</a> )}---
      {parseInt(page) < info.pages && ( <a href={`/characters/${parseInt(page) + 1}`}>Siguiente página</a> )}

      <ul>
        {results.map((character) => (
          <li key={character.id}>
            <a href={`/character/${character.id}`}>{character.name}</a>
          </li>
        ))}
      </ul>

    </>
  );
};

export default Page;