import React from 'react';

const FilterSection: React.FC = () => {
    return (
        <section className="flex flex-col self-stretch px-4 mt-3 w-full text-sm">
            <div className="flex gap-5 whitespace-nowrap">
                <button className="justify-center px-4 py-2.5 text-white bg-emerald-800 rounded">Penny</button>
                <button className="justify-center px-3.5 py-2.5 text-emerald-800 rounded border-2 border-emerald-800 border-solid">Kaufland</button>
            </div>
            <div className="flex gap-5 mt-5 text-emerald-800">
                <button className="flex flex-1 gap-5 justify-center px-2 py-1 rounded border border-solid border-neutral-900 border-opacity-10">
                    <span className="my-auto">Select Time</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e31ea7d4176f0797c3fc47b9e59cc70046084f8fabf3ac06da660c2c87f4484?apiKey=26ead33fc8694363aee9bae642a50a76&" alt="" className="shrink-0 w-6 aspect-square" />
                </button>
                <button className="flex flex-1 gap-5 justify-end px-2 py-1 rounded border border-solid border-neutral-900 border-opacity-10">
                    <span className="my-auto">Select Diet</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e31ea7d4176f0797c3fc47b9e59cc70046084f8fabf3ac06da660c2c87f4484?apiKey=26ead33fc8694363aee9bae642a50a76&" alt="" className="shrink-0 w-6 aspect-square" />
                </button>
            </div>
        </section>
    );
};

export default FilterSection;