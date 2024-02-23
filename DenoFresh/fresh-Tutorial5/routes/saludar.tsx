import { Handlers, FreshContext, PageProps } from "$fresh/server.ts"

type Data = {
    name?: string;
}

export const handler: Handlers = {
    GET: (req: Request, ctx: FreshContext<unknown, Data>) => {
        const url = new URL(req.url);
        const name = url.searchParams.get("name") || undefined;
        return ctx.render({ name });
    },
};

const Page = (props: PageProps<Data>) => {
    return (
      <div>
        <form method="get" targer="/saludar">
            Introduce nombre:{" "} 
            <input type="text" name="name" defaultValue={props.data.name || "" }/>
            <button type="submit">Buscar</button>    
        </form>
        {props.data.name && <h1>Hola {props.data.name}</h1>}
      </div>
    );
};
  
export default Page;