import NoteListings from "../components/NoteListings";
const CodingNotes = ({ notes, loading }) => {
    const codingNotes = notes.filter((note) => note.category === "coding");
    return <NoteListings notes={codingNotes} loading={loading} />;
};

export default CodingNotes;
