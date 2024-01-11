
import { Router } from '@tanstack/react-router'
import rootRoute from "./root.tsx";
import aboutRoute from "./about.tsx";
import indexRoute from "./index.tsx";

export const routeTree = rootRoute.addChildren([
    indexRoute,
    aboutRoute
])

export function createRouter() {
    return new Router({ routeTree })
}

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createRouter>
    }
}