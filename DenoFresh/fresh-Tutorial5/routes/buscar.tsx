import { Handlers, FreshContext, PageProps } from "$fresh/server.ts"

type Character = {
    name: string;
    id: string;
}

type Data = {
    search?: string;
    characters: Character[];
}

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext) => {
        const url = new URL(req.url);
        const search = url.searchParams.get("search");
        if (!search) {
            return ctx.render({ characters: [], search: "" });
        }
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`,);
        if (response.status !== 200) {
            return ctx.render({ characters: [], search });
        }
        const data = await response.json();
        return ctx.render({ characters: data.results, search });
    },
};

const Page = (props: PageProps<Data>) => {
    return (
      <>
        <form method="get" action="/buscar">
            Introduce texto:{" "} 
            <input type="text" name="search" defaultValue={props.data.search}/>
            <button type="submit">Buscar</button>    
        </form>
        {props.data.characters.map((ch) => <div key={ch.id}>{ch.name}</div>)}
      </>
    );
};
  
export default Page;