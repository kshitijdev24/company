import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Ecosystem from "./pages/Ecosystem";
import Technology from "./pages/Technology";
import Community from "./pages/Community";
import Safety from "./pages/Safety";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "ecosystem", Component: Ecosystem },
      { path: "technology", Component: Technology },
      { path: "community", Component: Community },
      { path: "safety", Component: Safety },
      { path: "blog", Component: Blog },
      { path: "careers", Component: Careers },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
