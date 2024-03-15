import { Handlers } from "$fresh/server.ts";
import { BooksResponse } from "../../types.ts";

export const handler: Handlers = {
    GET: async () => {
        const API_TOKEN = Deno.env.get("API_TOKEN");
        const API_URL = Deno.env.get("API_URL");

        if(!API_TOKEN || !API_URL ) {
            return new Response("You shall not pass", { status: 500 });
        }

        const response = await fetch(`${API_URL}/book`, {
            headers: {
                "Authorization": `Bearer ${API_TOKEN}`,
            },
        });

        if(response.status !== 200) {
            return new Response("You shall not pass - API error", {status: 500});
        }

        const data:BooksResponse = await response.json();
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    },
};