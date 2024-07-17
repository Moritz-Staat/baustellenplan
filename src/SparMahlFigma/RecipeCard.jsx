import React from 'react';

interface RecipeCardProps {
    name: string;
    image: string;
    store: string;
    time: string;
    discount: string;
    price: string;
    priceImage: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ name, image, store, time, discount, price, priceImage }) => {
    return (
        <article className="flex gap-5 pr-1.5 mt-3.5 w-full bg-white rounded-xl border border-solid shadow-sm border-black border-opacity-10 max-w-[345px]">
            <div className="flex flex-auto gap-2 text-sm text-neutral-900 text-opacity-50">
                <img loading="lazy" src={image} alt={name} className="shrink-0 max-w-full aspect-square w-[125px]" />
                <div className="flex flex-col px-5 my-auto">
                    <h2 className="text-lg font-medium text-neutral-900">{name}</h2>
                    <div className="flex gap-1.5 mt-5 whitespace-nowrap">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8e8aa0dcde0aa025f79ff7a71a45f8f14f8c3628c72c214943af97c4da911c?apiKey=26ead33fc8694363aee9bae642a50a76&" alt="" className="shrink-0 aspect-square w-[18px]" />
                        <span>{store}</span>
                    </div>
                    <div className="flex gap-1.5 mt-5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d5af4a415082d9630dc5c549cb4242ec294074ebfd9ff600c2ffda67cd2db01?apiKey=26ead33fc8694363aee9bae642a50a76&" alt="" className="shrink-0 aspect-square w-[18px]" />
                        <span className="my-auto">{time}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col my-auto font-bold">
                <div className="justify-center px-1.5 py-2 text-xs text-white bg-emerald-800 rounded-2xl">{discount}</div>
                <div className="flex flex-col items-start pr-1 pl-3 mt-4 text-sm text-neutral-900">
                    <img loading="lazy" src={priceImage} alt="" className="border-red-600 border-solid aspect-[2.04] border-[3px] stroke-[3px] stroke-red-600 w-[43px]" />
                    <div className="mt-4">{price}</div>
                </div>
            </div>
        </article>
    );
};

export default RecipeCard;