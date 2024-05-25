import CategoryCard from "./CategoryCard";
import categories from "../categories.json";
const HomeCategoryCards = () => {
    return (
        <>
            <section className="py-10">
                <div className="cust-container">
                    <div className="w-full py-4 text-center">
                        <h2 className="play-bold text-4xl">Categories</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        {categories.map((cat) => (
                            <CategoryCard
                                key={cat.id}
                                link={cat.link}
                                name={cat.name}
                                description={cat.description}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeCategoryCards;
