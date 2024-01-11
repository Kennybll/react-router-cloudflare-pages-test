import { PagesFunction } from "@cloudflare/workers-types";
import { render } from "../src/entry-server";

export const onRequest: PagesFunction = async (context) => {
    const url = new URL(context.request.url);
    return await render(url.pathname);
};