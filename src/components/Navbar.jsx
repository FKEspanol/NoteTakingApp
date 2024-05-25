import { NavLink } from "react-router-dom";
const Navbar = () => {
    const linkClass = ({ isActive }) =>
        isActive
            ? "px-3 py-2 bg-dark rounded hover:bg-secondary"
            : "px-3 py-2 rounded hover:bg-secondary";

    return (
        <>
            <nav className="w-full py-5 bg-primary border-b border-gray-500">
                <div className="cust-container">
                    <div className="flex justify-between items-center">
                        <NavLink
                            to="/"
                            className="play-bold text-white text-3xl"
                        >
                            MyNotes
                        </NavLink>
                        <ol className="flex items-center gap-x-2 text-white">
                            <li>
                                <NavLink to="/" className={linkClass}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/notes" className={linkClass}>
                                    Notes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/add-note" className={linkClass}>
                                    Add Notes
                                </NavLink>
                            </li>
                        </ol>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
