import { Route } from "@tanstack/react-router";
import rootRoute from "./root";

const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: function Index() {
        return (
            <div className="p-2">
                <h3>Welcome Home!</h3>
            </div>
        );
    },
});

export default indexRoute;