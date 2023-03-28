/** @format */

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Password from "./components/Password";
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
