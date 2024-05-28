import { useEffect, useState } from "react";

import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import { toast } from "react-toastify";

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
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await fetch(
                    `http://localhost:7000/notes/getAllNotes`
                );
                const data = await res.json();
                setNotes(data.reverse());
            } catch (error) {
                console.log("Error on fetch notes in NoteListings.jsx ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNotes();
    }, []);

    const submitAddNoteForm = async (newNote) => {
        try {
            const res = await fetch(`http://localhost:7000/notes/addNote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(newNote),
            });

            const data = await res.json();
            setNotes(data.notesData);
            toast.success(data.message);
        } catch (error) {
            console.log("Something went wrong while sending request", error);
        }

        return;
    };

    const submitEditNoteForm = async (updatedNote) => {
        try {
            const res = await fetch(
                `http://localhost:7000/notes/updateNote/${updatedNote.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(updatedNote),
                }
            );

            const data = await res.json();
            setNotes(data.notesData);
            toast.success(data.message);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteNote = async (id) => {
        try {
            const res = await fetch(
                `http://localhost:7000/notes/deleteNote/${id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await res.json();
            setNotes(data.notesData);
            toast.success(data.message);
        } catch (error) {
            console.log(error);
        }
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route
                    index
                    element={<HomePage notes={notes} loading={loading} />}
                />
                <Route
                    path="/notes"
                    element={<NotesPage notes={notes} loading={loading} />}
                />
                <Route
                    path="/category/coding-notes"
                    element={
                        <CodingNotesPage notes={notes} loading={loading} />
                    }
                />
                <Route
                    path="/category/random-notes"
                    element={
                        <RandomNotesPage notes={notes} loading={loading} />
                    }
                />
                <Route
                    path="/note/:id"
                    element={<NotePage deleteNote={deleteNote} />}
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
