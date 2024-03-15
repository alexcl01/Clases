import { FreshContext, Handlers } from "$fresh/server.ts";
import FormData from "../islands/FormData.tsx";
import DataModel from "../db/Data.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        name: form.get("name"),
        email: form.get("email"),
        age: form.get("age"),
      };

      await DataModel.create(data);

      return new Response("", {
        status: 303,
        headers: {
          "Location": "/",
        },
      });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div>
      <FormData />
    </div>
  );
};

export default Page;