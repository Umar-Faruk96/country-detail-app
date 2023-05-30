import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import HandleError from "./Error/HandleError";
import CountryDetail from "./CountryDetail/CountryDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: <Home />,
      errorElement: <HandleError />,
    },
    {
      path: "/name/:countryName",
      element: <CountryDetail />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
