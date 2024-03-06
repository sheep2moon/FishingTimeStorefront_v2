import { Metadata } from "next";
import { getCategoriesList } from "../../lib/medusa/categories";

export const metadata: Metadata = {
    title: "Kategorie",
    description: "Przeglądaj wszystkie kategorie produktów."
};

export default async function CategoriesPage() {
    const categories = await getCategoriesList();
    console.log(categories);

    return (
        <div>
            {categories.map(category => {
                if (category.parent_category_id) return;

                return (
                    <div key={category.id}>
                        <div>{category.name}</div>
                        <div className="ml-4">
                            {category.category_children.map(child => {
                                console.log(child.category_children);

                                if (child.category_children?.length > 0)
                                    return (
                                        <div key={child.id}>
                                            <div>{child.name}</div>
                                            {child.category_children.map(secondChild => (
                                                <div className="ml-4" key={secondChild.id}>
                                                    {secondChild.name}
                                                </div>
                                            ))}
                                        </div>
                                    );
                                return <div key={child.id}>{child.name}</div>;
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
