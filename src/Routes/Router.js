import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
// import Landing from "../Pages/Landing/Landing";
// import Matches from "../Pages/Matches/Matches";
// import History from "../Pages/History/History";
// import About from "../Pages/About/About";
// import News from "../Pages/News/News";
// import Contact from "../Pages/Contact/Contact";
import { Contact, History, News, Landing, About, Matches } from "../Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/Matches",
        element: <Matches />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/News",
        element: <News />,
      },
      {
        path: "/History",
        element: <History />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
