import React from "react";
import ReactDOM from "react-dom/client";
import App from "./screens/App.tsx";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import SignIn from "./screens/SignIn.tsx";
import SignUp from "./screens/SignUp.tsx";
import Home from "./component/Home.tsx";
import TeamViewComponent from "./component/TeamViewCompoenet.tsx";
import IssueViewComponent from "./component/IssueViewComponent.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/signin" replace /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  {
    path: "/home",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "team/:team_id", element: <TeamViewComponent /> },
      { path: "issue/:issue_id", element: <IssueViewComponent /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
