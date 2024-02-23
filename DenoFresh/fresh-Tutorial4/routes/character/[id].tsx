// ej: llamar a la pagina del character 2 
// muestre la info del character con id=2 de rick&morty
// el GET debe ser async

import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";

type Character = {
    id: number;
    name: string;
    image: string;
    status: string;
};

export const handler: Handlers = {                                                                          // el Handler recibe la llamada, coge el nombre y se lo pasa al render
    GET: async ( _req: Request, ctx: FreshContext<unknown, Character> ) => {
      try{  
        const id = ctx.params.id;                                                                           // entre las {} se pone name porque es el nombre del archivo [name].tsx 
        debugger;
        const response = await Axios.get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
        if (response.status !== 200){
          throw new Error("Ha habido un error");
        }
        return ctx.render(response.data);                                                                   // a la función render le pasamos el nombre que queremos
      }catch (e) {
        throw new Error("Ha habido un error");
      }
    },
};

const Page = (props: PageProps<Character>) => {                                                             // función que renderiza la página, lo que hay dentro de PageProps 
    const ch = props.data;                                                                                  // debe ser lo mismo que el segundo parámetro de FreshContext (Character)
    return (
      <div>
        <h1>{ch.name}</h1>
        <image src={ch.image}/>
        <div>Status: {ch.status}</div>
      </div>
    );
};

export default Page;