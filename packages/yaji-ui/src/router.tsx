import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NoteLayoutPage from "./pages/note/layout";
import NoteEditPage from "./pages/note/edit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/note",
    element: <NoteLayoutPage />,
    children: [
      {
        path: "edit/:noteId",
        element: <NoteEditPage />
      }
    ]
  }
]);