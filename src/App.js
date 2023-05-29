import {Route, Link, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider
} from "react-router-dom";
import './App.css';
import Home from './paginas/home.js'
import About from './paginas/About.js'
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={"/"} element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path={"about"} element={<About />} />
        </Route>
    )
)
function App() {
  return(
    <RouterProvider router={router} />
  )
}
export default App;