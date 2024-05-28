import NoteListing from "./NoteListing";
import Spinner from "./Spinner";
const NoteListings = ({ isHome = false, notes, loading }) => {
    return (
        <>
            <section className="py-10 bg-light">
                <div className="cust-container">
                    <div className="w-full py-5 text-center">
                        <h2 className="play-bold text-3xl">
                            {isHome ? "Recent Notes" : "Notes"}
                        </h2>
                    </div>
                    {loading ? (
                        <Spinner loading={loading} />
                    ) : (
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
                    )}
                </div>
            </section>
        </>
    );
};

export default NoteListings;
