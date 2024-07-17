import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import FilterSection from './FilterSection';
import RecipeCard from './RecipeCard';
import ExpandedRecipeCard from './ExpandedRecipeCard';

const SparMahlApp: React.FC = () => {
    const recipes = [
        {
            id: 1,
            name: 'Chicken Curry',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/55291cd303d086ecc269fe149e77450c7f5a5f2f47d9ca84b20455f4c4e51daf?apiKey=26ead33fc8694363aee9bae642a50a76&',
            store: 'Penny',
            time: '35 minutes',
            discount: '30% OFF',
            price: '3,49 €',
            priceImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/13d6a54913de35e2604e36ff1de0eb22a48dcc20d1d7e2864cfcf7191f2a834f?apiKey=26ead33fc8694363aee9bae642a50a76&',
        },
        {
            id: 2,
            name: 'Backkartoffel',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/517bcd9b15ba04f6fa9867937b25f1f741967d334224243e3c19b40eecc452be?apiKey=26ead33fc8694363aee9bae642a50a76&',
            store: 'Penny',
            time: '45 minutes',
            discount: '20% OFF',
            price: '4,49 €',
            priceImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5796fdec888583617c1b61b8b2777c103c03300780baa8bff3e1826a07a89577?apiKey=26ead33fc8694363aee9bae642a50a76&',
        },
        {
            id: 3,
            name: 'Currywurst',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fe7facdfdcf21e316324fe32ed4404f7a2478e91493f5435faafb106e04d357d?apiKey=26ead33fc8694363aee9bae642a50a76&',
            store: 'Penny',
            time: '20 minutes',
            discount: '50% OFF',
            price: '2,29 €',
            priceImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/68bfcbbb47d758264ea4e4a1d6bdee5bf86782e5e976cd3abb5590459ef2bfdb?apiKey=26ead33fc8694363aee9bae642a50a76&',
        },
    ];

    return (
        <main className="flex flex-col items-center mx-auto w-full bg-slate-50 max-w-[480px]">
            <Header />
            <SearchBar />
            <FilterSection />
            <hr className="self-stretch mt-5 w-full border border-solid bg-black bg-opacity-0 border-black border-opacity-0 min-h-[1px]" />
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} {...recipe} />
            ))}
            <ExpandedRecipeCard />
        </main>
    );
};

export default SparMahlApp;