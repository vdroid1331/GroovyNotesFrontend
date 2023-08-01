import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
// import { Children } from "react";
import Body from "./components/Body/Body";
import Error from "./components/Error/Error";
import About from "./components/About/About";
import ContacUs from "./components/ContactUs/ContacUs";
import NewNote from "./components/Notes/NewNote";


const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contactus",
                element: <ContacUs />
            },
            {
                path: "/new",
                element: <NewNote />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router={appRouter} />);