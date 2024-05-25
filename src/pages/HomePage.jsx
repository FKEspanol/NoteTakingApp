import Hero from "../components/Hero";
import HomeCategoryCards from "../components/HomeCategoryCards";
import NoteListings from "../components/NoteListings";
const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCategoryCards />
            <NoteListings isHome={true} />
        </>
    );
};
export default HomePage;
