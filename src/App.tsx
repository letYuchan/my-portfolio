import OnboardingPage from "@/pages/onboarding/LandingPage";
import Layout from "@/shared/components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <OnboardingPage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
