import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import Projects from "./components/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects",
    Component: Projects,
  },
  {
    path: "/projects/:projectId",
    Component: Projects,
  },
]);
