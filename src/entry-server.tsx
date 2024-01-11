// src/entry-server.tsx
import ReactDOMServer from 'react-dom/server'
import { createMemoryHistory } from '@tanstack/react-router'
import { StartServer } from '@tanstack/react-router-server/server'
import { createRouter } from './routers/createRouter.tsx'
import { Response } from "@cloudflare/workers-types";

export async function render(url: string) {
    const router = createRouter()

    const memoryHistory = createMemoryHistory({
        initialEntries: [url],
    })

    router.update({
        history: memoryHistory,
    })

    await router.load()

    const appHtml = ReactDOMServer.renderToString(<StartServer router={router} />)

    return new Response(`<!DOCTYPE html>${appHtml}`, {
        headers: {
            "content-type": "text/html;charset=UTF-8",
        },
        status: 200,
    });
}