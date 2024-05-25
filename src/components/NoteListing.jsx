import { Link } from "react-router-dom";
const NoteListing = ({ id, category, title, noteBody }) => {
    return (
        <>
            <article className="p-7 rounded-md shadow-md border bg-white">
                <small className="text-smoke text-base mb-3">{category}</small>
                <h5 className="play-semibold text-xl mb-5">{title}</h5>
                <p className="text-smoke text-sm mb-7">{noteBody}</p>
                <Link
                    to={`/note/${id}`}
                    className="px-2 py-3 rounded bg-success text-white"
                >
                    Read More
                </Link>
            </article>
        </>
    );
};

export default NoteListing;
