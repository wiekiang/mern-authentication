/** @format */

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Password from "./components/Password";
import Recovery from "./components/Recovery";
import Reset from "./components/Reset";
import Register from "./components/Register";

/** Routes **/
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/password",
        element: <Password />,
    },
    {
        path: "/reset",
        element: <Reset />,
    },
    {
        path: "/recovery",
        element: <Recovery />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

export default function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
    );
}
