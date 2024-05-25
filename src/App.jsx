import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import NotePage from "./pages/NotePage";
import AddNotePage from "./pages/AddNotePage";
import EditNotePage from "./pages/EditNotePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/notes" element={<NotesPage />} />
                <Route path="/note/:id" element={<NotePage />} />
                <Route path="/add-note" element={<AddNotePage />} />
                <Route path="/edit-note" element={<EditNotePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
