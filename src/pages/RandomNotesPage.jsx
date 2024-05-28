import NoteListings from "../components/NoteListings";
const RandomNotes = ({ notes, loading }) => {
    const randomNotes = notes.filter((note) => note.category === "random");
    return <NoteListings notes={randomNotes} loading={loading} />;
};

export default RandomNotes;
