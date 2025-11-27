import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./shared/components/Layout";
import Landing from "./pages/Intro/components/Landing";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <Landing /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
