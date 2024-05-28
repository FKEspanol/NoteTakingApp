import Hero from "../components/Hero";
import HomeCategoryCards from "../components/HomeCategoryCards";
import NoteListings from "../components/NoteListings";
const HomePage = ({ notes, loading }) => {
    return (
        <>
            <Hero />
            <HomeCategoryCards />
            <NoteListings isHome={true} notes={notes} loading={loading} />
        </>
    );
};
export default HomePage;
