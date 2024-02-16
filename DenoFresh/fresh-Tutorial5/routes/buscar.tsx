import { Handlers, FreshContext, PageProps } from "$fresh/server.ts"

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext) => {
        const url = new URL(req.url);
        const search = url.searchParams.get("search");
        if (!search) {
            return ctx.render([]);
        }
        return ctx.render([]);
    },
};

const Page = (props: PageProps) => {
    return (
      <>
        <form method="get" action="/buscar">
            Introduce texto: <input type="text" name="search"/>
            <button type="Buscar"/>            
        </form>
      </>
    );
};
  
export default Page;