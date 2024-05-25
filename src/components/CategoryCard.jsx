import { Link } from "react-router-dom";

const CategoryCard = ({ link, name, description }) => {
    return (
        <>
            <div className="bg-light p-7 rounded-md shadow">
                <h4 className="text-2xl mb-4 play-bold">{name}</h4>
                <p className="mb-6">{description}</p>
                <Link
                    className="px-2 py-3 rounded bg-success text-white"
                    to={`/category/${link}`}
                >
                    View Notes
                </Link>
            </div>
        </>
    );
};

export default CategoryCard;
