import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNotePage = ({ submitAddNoteForm }) => {
    const [category, setCategory] = useState("random");
    const [title, setTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");

    const navigate = useNavigate();

    const onSubmitForm = () => {
        const newNote = {
            category,
            title,
            noteBody,
        };

        submitAddNoteForm(newNote);

        navigate("/notes");
    };

    return (
        <>
            <section className="py-10">
                <div className="cust-container">
                    <form
                        action=""
                        className="w-full lg:w-[70%] mx-auto"
                        onSubmit={onSubmitForm}
                    >
                        <label htmlFor="category">Select Category:</label>
                        <select
                            name="category"
                            id="category"
                            className="border rounded w-full py-2 px-3 mb-4"
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="random">Random</option>
                            <option value="coding">Coding</option>
                        </select>
                        <br />
                        <div className="mb-4">
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                className="border rounded w-full py-2 px-3 mb-2"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="noteBody">Body:</label>
                            <textarea
                                name="noteBody"
                                id="noteBody"
                                value={noteBody}
                                className="border rounded w-full py-2 px-3 mb-2"
                                rows={5}
                                onChange={(e) => setNoteBody(e.target.value)}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="px-3 py-3 rounded bg-success text-white"
                        >
                            Add Note
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default AddNotePage;
