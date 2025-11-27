import HomePage from "@/pages/home/HomePage";
import OnboardingPage from "@/pages/onboarding/OnboardingPage";
import Layout from "@/shared/components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <OnboardingPage /> },
        { path: "home", element: <HomePage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
