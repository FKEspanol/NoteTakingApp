import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const NotePage = ({ deleteNote }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const note = useLoaderData();

    const onDeleteClick = async () => {
        const confirm = window.confirm(
            "are you sure you want to delete this listing"
        );

        if (!confirm) return;
        deleteNote(id);
        toast.success("Note Deleted successfully");
        navigate("/notes");
    };

    return (
        <>
            <section className="py-10 bg-light">
                <div className="cust-container">
                    <article className="p-10 rounded-md shadow-md border bg-white mb-5">
                        <small className="text-base text-smoke mb-5">
                            {note.category}
                        </small>
                        <h2 className="play-bold text-4xl">{note.title}</h2>
                    </article>
                    <article className="p-10 rounded-md shadow-md border bg-white">
                        <h3 className="play-bold text-2xl">Note Body:</h3>
                        <p className="text-smoke">{note.noteBody}</p>
                    </article>

                    <div className="flex gap-x-2 mt-5">
                        <Link
                            to={`/edit-note/${id}`}
                            className="px-3 py-3 rounded bg-warning text-white"
                        >
                            Edit Note
                        </Link>
                        <button
                            onClick={onDeleteClick}
                            className="px-3 py-3 rounded bg-danger text-white"
                        >
                            Delete Note
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
const noteLoader = async ({ params }) => {
    const res = await fetch(`/api/notes/${params.id}`);
    const data = await res.json();
    return data;
};

export { NotePage as default, noteLoader };
