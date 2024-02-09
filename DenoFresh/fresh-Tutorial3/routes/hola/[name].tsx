import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type Data = {
    name: string;
};

export const handler: Handlers = {                                          // el Handler recibe la llamada, coge el nombre y se lo pasa al render
    GET: ( _req: Request, ctx: FreshContext<unknown, Data> ) => {
        const { name } = ctx.params;                                        // entre las {} se pone name porque es el nombre del archivo [name].tsx 
        return ctx.render({name});                                          // a la función render le pasamos el nombre que queremos
    },
};

const Page = (props: PageProps<Data>) => {                                  // función que renderiza la página
    const {name} = props.data;
    return (
        <div>Hola {name}</div>
    )
}

export default Page;