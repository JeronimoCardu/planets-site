import { createBrowserRouter } from "react-router-dom";
import Planet from "./Planet";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:planet",
    element: <Planet />,
  },
]);

export default router;
