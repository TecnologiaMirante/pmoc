import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "../pages/Home";



export function Routes() {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
        </BrowserRouter>
    );
}
 