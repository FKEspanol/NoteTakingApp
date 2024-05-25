import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import CodingNotesPage from "./pages/CodingNotesPage";
import RandomNotesPage from "./pages/RandomNotesPage";
import NotesPage from "./pages/NotesPage";
import NotePage, { noteLoader } from "./pages/NotePage";
import AddNotePage from "./pages/AddNotePage";
import EditNotePage from "./pages/EditNotePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    const submitAddNoteForm = async (newNote) => {
        try {
            await fetch(`/api/notes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(newNote),
            });
        } catch (error) {
            console.log("Something went wrong while sending request", error);
        }

        return;
    };

    const submitEditNoteForm = async (updatedNote) => {
        try {
            await fetch(`/api/notes/${updatedNote.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(updatedNote),
            });
        } catch (error) {
            console.log(error);
        }
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/notes" element={<NotesPage />} />
                <Route
                    path="/category/coding-notes"
                    element={<CodingNotesPage />}
                />
                <Route
                    path="/category/random-notes"
                    element={<RandomNotesPage />}
                />
                <Route
                    path="/note/:id"
                    element={<NotePage />}
                    loader={noteLoader}
                />
                <Route
                    path="/add-note"
                    element={
                        <AddNotePage submitAddNoteForm={submitAddNoteForm} />
                    }
                />
                <Route
                    path="/edit-note/:id"
                    element={
                        <EditNotePage submitEditNoteForm={submitEditNoteForm} />
                    }
                    loader={noteLoader}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
