import React from 'react';

const ExpandedRecipeCard: React.FC = () => {
    return (
        <article className="flex flex-col items-start mt-5 w-full bg-white rounded-xl border border-solid shadow-sm border-black border-opacity-10 max-w-[345px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d9f1ed1305136d74a711357b9ee5004fcc1e17a2c989911aff91ae550dde7cf?apiKey=26ead33fc8694363aee9bae642a50a76&" alt="Chicken Curry" className="max-w-full aspect-[1.67] w-[125px]" />
            <div className="flex gap-5 justify-center px-8 py-0.5 w-full bg-orange-800 shadow-sm">
                <div className="flex flex-col pt-1.5 my-auto text-xs text-white whitespace-nowrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdf53b0d63f0467b206ea09104231087f6296f4e9cf46bc2a6d320cb4e4dea32?apiKey=26ead33fc8694363aee9bae642a50a76&" alt="" className="self-center aspect-square fill-white w-[18px]" />
                    <div className="mt-1.5">Products</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div className="flex flex-col self-start">
                        <h2 className="text-lg font-medium text-neutral-900">Chicken Curry</h2>
                        <div className="flex gap-1.5 mt-5 text-sm whitespace-nowrap text-neutral-900 text-opacity-50">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8e8aa0dcde0aa025f79ff7a71a45f8f14f8c3628c72c214943af97c4da911c?apiKey=26ead33fc8694363aee9bae642a50a76&" alt="" className="shrink-0 aspect-square w-[18px]" />
                            <span>Penny</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d720596d4361bc6007f1673e87e4fde6fb3a0436999fc42f6b4a93049e89dc?apiKey=26ead33fc8694363aee9bae642a50a76&" alt="30% OFF" className="self-center rounded-2xl aspect-[1.72] w-[59px]" />
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/853eece10ed333c46442101254ceaf80a006bc026d82561e7400d3b9c5138a2a?apiKey=26ead33fc8694363aee9bae642a50a76&" alt="" className="mt-2 ml-3 border-red-600 border-solid aspect-[2.04] border-[3px] stroke-[3px] stroke-red-600 w-[43px]" />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ExpandedRecipeCard;