import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./shared/components/Layout";
import LandingPage from "./pages/landing/LandingPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <LandingPage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
