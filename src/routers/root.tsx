import TanStackRouterDevtools from "../components/TanStackRouterDevtools";
import { Link, Outlet, RootRoute } from "@tanstack/react-router";
import { Suspense } from "react";

const rootRoute = new RootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{" "}
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
            </div>
            <hr />
            <Outlet />
            <Suspense fallback={null}>
                <TanStackRouterDevtools initialIsOpen={false} />
            </Suspense>
        </>
    ),
});

export default rootRoute;