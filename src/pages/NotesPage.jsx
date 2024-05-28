import NoteListings from "../components/NoteListings";
const NotesPage = ({ notes, loading }) => {
    return <NoteListings notes={notes} loading={loading} />;
};

export default NotesPage;
