import { useEffect, useState } from "react";
import NoteListing from "./NoteListing";
const NoteListings = ({ isHome = false }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await fetch(`/api/notes`);
                const data = await res.json();
                setNotes(data.reverse());
            } catch (error) {
                console.log("Error on fetch notes in NoteListings.jsx ", error);
            }
        };

        fetchNotes();
    }, []);
    return (
        <>
            <section className="py-10 bg-light">
                <div className="cust-container">
                    <div className="w-full py-5 text-center">
                        <h2 className="play-bold text-3xl">
                            {isHome ? "Recent Notes" : "Notes"}
                        </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        {notes
                            .slice(0, isHome ? 3 : notes.length)
                            .map((note) => (
                                <NoteListing
                                    key={note.id}
                                    id={note.id}
                                    category={note.category}
                                    title={note.title}
                                    noteBody={note.noteBody}
                                />
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default NoteListings;
