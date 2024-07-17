import * as React from "react";

function MyComponent() {
    return (
        <div className="flex flex-col items-center mx-auto w-full bg-slate-50 max-w-[480px]">
            <div className="flex flex-col items-center self-stretch pb-6 w-full bg-orange-800 rounded-none">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e91c9938ccfdf1df946c31fe55266be282893d00e12d6d63874fe2af30d74a75?apiKey=26ead33fc8694363aee9bae642a50a76&"
                    className="self-stretch w-full aspect-[8.33]"
                />
                <div className="flex gap-5 justify-between px-5 mt-3 w-full max-w-[385px]">
                    <div className="my-auto text-2xl text-white">SparMahl</div>
                    <div className="flex gap-3">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dae7ac0cc1d9a103a92d6f4fac4c16f8873bbcc39680d03314dee19527b394d?apiKey=26ead33fc8694363aee9bae642a50a76&"
                            className="shrink-0 border border-white border-solid aspect-square w-[30px]"
                        />
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/33255c20bdeeee9c6280d33abe89c6fbb2642eba7452cc8524ef22f2ecbd2e54?apiKey=26ead33fc8694363aee9bae642a50a76&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33255c20bdeeee9c6280d33abe89c6fbb2642eba7452cc8524ef22f2ecbd2e54?apiKey=26ead33fc8694363aee9bae642a50a76&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33255c20bdeeee9c6280d33abe89c6fbb2642eba7452cc8524ef22f2ecbd2e54?apiKey=26ead33fc8694363aee9bae642a50a76&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33255c20bdeeee9c6280d33abe89c6fbb2642eba7452cc8524ef22f2ecbd2e54?apiKey=26ead33fc8694363aee9bae642a50a76&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33255c20bdeeee9c6280d33abe89c6fbb2642eba7452cc8524ef22f2ecbd2e54?apiKey=26ead33fc8694363aee9bae642a50a76&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33255c20bdeeee9c6280d33abe89c6fbb2642eba7452cc8524ef22f2ecbd2e54?apiKey=26ead33fc8694363aee9bae642a50a76&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33255c20bdeeee9c6280d33abe89c6fbb2642eba7452cc8524ef22f2ecbd2e54?apiKey=26ead33fc8694363aee9bae642a50a76&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/33255c20bdeeee9c6280d33abe89c6fbb2642eba7452cc8524ef22f2ecbd2e54?apiKey=26ead33fc8694363aee9bae642a50a76&"
                            className="shrink-0 rounded-full aspect-square w-[30px]"
                        />
                    </div>
                </div>
                <div className="flex gap-2 px-5 py-4 mt-7 w-full text-xs bg-white rounded shadow-lg max-w-[345px] text-black text-opacity-30">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3933b89e6b0da1b6a13251e2f203ead07139ceb33aa005e2d6451afef79e4a8?apiKey=26ead33fc8694363aee9bae642a50a76&"
                        className="shrink-0 border-2 border-solid aspect-square border-neutral-900 stroke-[1.6px] stroke-neutral-900 w-[15px]"
                    />
                    <div>Search for recipes & ingredients</div>
                </div>
            </div>
            <div className="flex flex-col self-stretch px-4 mt-3 w-full text-sm">
                <div className="flex gap-5 whitespace-nowrap">
                    <div className="justify-center px-4 py-2.5 text-white bg-emerald-800 rounded">
                        Penny
                    </div>
                    <div className="justify-center px-3.5 py-2.5 text-emerald-800 rounded border-2 border-emerald-800 border-solid">
                        Kaufland
                    </div>
                </div>
                <div className="flex gap-5 mt-5 text-emerald-800">
                    <div className="flex flex-1 gap-5 justify-center px-2 py-1 rounded border border-solid border-neutral-900 border-opacity-10">
                        <div className="my-auto">Select Time</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e31ea7d4176f0797c3fc47b9e59cc70046084f8fabf3ac06da660c2c87f4484?apiKey=26ead33fc8694363aee9bae642a50a76&"
                            className="shrink-0 w-6 aspect-square"
                        />
                    </div>
                    <div className="flex flex-1 gap-5 justify-end px-2 py-1 rounded border border-solid border-neutral-900 border-opacity-10">
                        <div className="my-auto">Select Diet</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e31ea7d4176f0797c3fc47b9e59cc70046084f8fabf3ac06da660c2c87f4484?apiKey=26ead33fc8694363aee9bae642a50a76&"
                            className="shrink-0 w-6 aspect-square"
                        />
                    </div>
                </div>
            </div>
            <div className="self-stretch mt-5 w-full border border-solid bg-black bg-opacity-0 border-black border-opacity-0 min-h-[1px]" />
            <div className="flex gap-5 pr-1.5 mt-3.5 w-full bg-white rounded-xl border border-solid shadow-sm border-black border-opacity-10 max-w-[345px]">
                <div className="flex flex-auto gap-2 text-sm text-neutral-900 text-opacity-50">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/55291cd303d086ecc269fe149e77450c7f5a5f2f47d9ca84b20455f4c4e51daf?apiKey=26ead33fc8694363aee9bae642a50a76&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/55291cd303d086ecc269fe149e77450c7f5a5f2f47d9ca84b20455f4c4e51daf?apiKey=26ead33fc8694363aee9bae642a50a76&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55291cd303d086ecc269fe149e77450c7f5a5f2f47d9ca84b20455f4c4e51daf?apiKey=26ead33fc8694363aee9bae642a50a76&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/55291cd303d086ecc269fe149e77450c7f5a5f2f47d9ca84b20455f4c4e51daf?apiKey=26ead33fc8694363aee9bae642a50a76&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/55291cd303d086ecc269fe149e77450c7f5a5f2f47d9ca84b20455f4c4e51daf?apiKey=26ead33fc8694363aee9bae642a50a76&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55291cd303d086ecc269fe149e77450c7f5a5f2f47d9ca84b20455f4c4e51daf?apiKey=26ead33fc8694363aee9bae642a50a76&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/55291cd303d086ecc269fe149e77450c7f5a5f2f47d9ca84b20455f4c4e51daf?apiKey=26ead33fc8694363aee9bae642a50a76&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/55291cd303d086ecc269fe149e77450c7f5a5f2f47d9ca84b20455f4c4e51daf?apiKey=26ead33fc8694363aee9bae642a50a76&"
                        className="shrink-0 max-w-full aspect-square w-[125px]"
                    />
                    <div className="flex flex-col px-5 my-auto">
                        <div className="text-lg font-medium text-neutral-900">
                            Chicken Curry
                        </div>
                        <div className="flex gap-1.5 mt-5 whitespace-nowrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8e8aa0dcde0aa025f79ff7a71a45f8f14f8c3628c72c214943af97c4da911c?apiKey=26ead33fc8694363aee9bae642a50a76&"
                                className="shrink-0 aspect-square w-[18px]"
                            />
                            <div>Penny</div>
                        </div>
                        <div className="flex gap-1.5 mt-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d5af4a415082d9630dc5c549cb4242ec294074ebfd9ff600c2ffda67cd2db01?apiKey=26ead33fc8694363aee9bae642a50a76&"
                                className="shrink-0 aspect-square w-[18px]"
                            />
                            <div className="my-auto">35 minutes</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col my-auto font-bold">
                    <div className="justify-center px-1.5 py-2 text-xs text-white bg-emerald-800 rounded-2xl">
                        30% OFF
                    </div>
                    <div className="flex flex-col items-start pr-1 pl-3 mt-4 text-sm text-neutral-900">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/13d6a54913de35e2604e36ff1de0eb22a48dcc20d1d7e2864cfcf7191f2a834f?apiKey=26ead33fc8694363aee9bae642a50a76&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/13d6a54913de35e2604e36ff1de0eb22a48dcc20d1d7e2864cfcf7191f2a834f?apiKey=26ead33fc8694363aee9bae642a50a76&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/13d6a54913de35e2604e36ff1de0eb22a48dcc20d1d7e2864cfcf7191f2a834f?apiKey=26ead33fc8694363aee9bae642a50a76&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/13d6a54913de35e2604e36ff1de0eb22a48dcc20d1d7e2864cfcf7191f2a834f?apiKey=26ead33fc8694363aee9bae642a50a76&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/13d6a54913de35e2604e36ff1de0eb22a48dcc20d1d7e2864cfcf7191f2a834f?apiKey=26ead33fc8694363aee9bae642a50a76&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/13d6a54913de35e2604e36ff1de0eb22a48dcc20d1d7e2864cfcf7191f2a834f?apiKey=26ead33fc8694363aee9bae642a50a76&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/13d6a54913de35e2604e36ff1de0eb22a48dcc20d1d7e2864cfcf7191f2a834f?apiKey=26ead33fc8694363aee9bae642a50a76&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/13d6a54913de35e2604e36ff1de0eb22a48dcc20d1d7e2864cfcf7191f2a834f?apiKey=26ead33fc8694363aee9bae642a50a76&"
                            className="border-red-600 border-solid aspect-[2.04] border-[3px] stroke-[3px] stroke-red-600 w-[43px]"
                        />
                        <div className="mt-4">3,49 € </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 justify-between pr-1.5 mt-5 w-full bg-white rounded-xl border border-solid shadow-sm border-black border-opacity-10 max-w-[345px]">
                <div className="flex gap-2 text-sm text-neutral-900 text-opacity-50">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/517bcd9b15ba04f6fa9867937b25f1f741967d334224243e3c19b40eecc452be?apiKey=26ead33fc8694363aee9bae642a50a76&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/517bcd9b15ba04f6fa9867937b25f1f741967d334224243e3c19b40eecc452be?apiKey=26ead33fc8694363aee9bae642a50a76&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/517bcd9b15ba04f6fa9867937b25f1f741967d334224243e3c19b40eecc452be?apiKey=26ead33fc8694363aee9bae642a50a76&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/517bcd9b15ba04f6fa9867937b25f1f741967d334224243e3c19b40eecc452be?apiKey=26ead33fc8694363aee9bae642a50a76&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/517bcd9b15ba04f6fa9867937b25f1f741967d334224243e3c19b40eecc452be?apiKey=26ead33fc8694363aee9bae642a50a76&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/517bcd9b15ba04f6fa9867937b25f1f741967d334224243e3c19b40eecc452be?apiKey=26ead33fc8694363aee9bae642a50a76&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/517bcd9b15ba04f6fa9867937b25f1f741967d334224243e3c19b40eecc452be?apiKey=26ead33fc8694363aee9bae642a50a76&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/517bcd9b15ba04f6fa9867937b25f1f741967d334224243e3c19b40eecc452be?apiKey=26ead33fc8694363aee9bae642a50a76&"
                        className="shrink-0 max-w-full aspect-square w-[125px]"
                    />
                    <div className="flex flex-col px-5 my-auto">
                        <div className="text-lg font-medium text-neutral-900">
                            Backkartoffel
                        </div>
                        <div className="flex gap-1.5 mt-6 whitespace-nowrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8e8aa0dcde0aa025f79ff7a71a45f8f14f8c3628c72c214943af97c4da911c?apiKey=26ead33fc8694363aee9bae642a50a76&"
                                className="shrink-0 aspect-square w-[18px]"
                            />
                            <div>Penny</div>
                        </div>
                        <div className="flex gap-1.5 mt-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d5af4a415082d9630dc5c549cb4242ec294074ebfd9ff600c2ffda67cd2db01?apiKey=26ead33fc8694363aee9bae642a50a76&"
                                className="shrink-0 aspect-square w-[18px]"
                            />
                            <div className="my-auto">45 minutes</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col my-auto font-bold">
                    <div className="justify-center px-1.5 py-2 text-xs text-white bg-emerald-800 rounded-2xl">
                        20% OFF
                    </div>
                    <div className="flex flex-col items-start pr-1 pl-3 mt-4 text-sm text-neutral-900">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5796fdec888583617c1b61b8b2777c103c03300780baa8bff3e1826a07a89577?apiKey=26ead33fc8694363aee9bae642a50a76&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5796fdec888583617c1b61b8b2777c103c03300780baa8bff3e1826a07a89577?apiKey=26ead33fc8694363aee9bae642a50a76&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5796fdec888583617c1b61b8b2777c103c03300780baa8bff3e1826a07a89577?apiKey=26ead33fc8694363aee9bae642a50a76&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5796fdec888583617c1b61b8b2777c103c03300780baa8bff3e1826a07a89577?apiKey=26ead33fc8694363aee9bae642a50a76&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5796fdec888583617c1b61b8b2777c103c03300780baa8bff3e1826a07a89577?apiKey=26ead33fc8694363aee9bae642a50a76&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5796fdec888583617c1b61b8b2777c103c03300780baa8bff3e1826a07a89577?apiKey=26ead33fc8694363aee9bae642a50a76&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5796fdec888583617c1b61b8b2777c103c03300780baa8bff3e1826a07a89577?apiKey=26ead33fc8694363aee9bae642a50a76&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5796fdec888583617c1b61b8b2777c103c03300780baa8bff3e1826a07a89577?apiKey=26ead33fc8694363aee9bae642a50a76&"
                            className="w-11 border-red-600 border-solid aspect-[2.08] border-[3px] stroke-[3px] stroke-red-600"
                        />
                        <div className="mt-4">4,49 € </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 justify-between pr-1.5 mt-5 w-full bg-white rounded-xl border border-solid shadow-sm border-black border-opacity-10 max-w-[345px]">
                <div className="flex gap-2 text-sm text-neutral-900 text-opacity-50">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe7facdfdcf21e316324fe32ed4404f7a2478e91493f5435faafb106e04d357d?apiKey=26ead33fc8694363aee9bae642a50a76&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe7facdfdcf21e316324fe32ed4404f7a2478e91493f5435faafb106e04d357d?apiKey=26ead33fc8694363aee9bae642a50a76&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe7facdfdcf21e316324fe32ed4404f7a2478e91493f5435faafb106e04d357d?apiKey=26ead33fc8694363aee9bae642a50a76&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe7facdfdcf21e316324fe32ed4404f7a2478e91493f5435faafb106e04d357d?apiKey=26ead33fc8694363aee9bae642a50a76&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe7facdfdcf21e316324fe32ed4404f7a2478e91493f5435faafb106e04d357d?apiKey=26ead33fc8694363aee9bae642a50a76&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe7facdfdcf21e316324fe32ed4404f7a2478e91493f5435faafb106e04d357d?apiKey=26ead33fc8694363aee9bae642a50a76&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe7facdfdcf21e316324fe32ed4404f7a2478e91493f5435faafb106e04d357d?apiKey=26ead33fc8694363aee9bae642a50a76&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe7facdfdcf21e316324fe32ed4404f7a2478e91493f5435faafb106e04d357d?apiKey=26ead33fc8694363aee9bae642a50a76&"
                        className="shrink-0 max-w-full aspect-square w-[125px]"
                    />
                    <div className="flex flex-col px-5 my-auto">
                        <div className="text-lg font-medium text-neutral-900">
                            Currywurst
                        </div>
                        <div className="flex gap-1.5 mt-5 whitespace-nowrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8e8aa0dcde0aa025f79ff7a71a45f8f14f8c3628c72c214943af97c4da911c?apiKey=26ead33fc8694363aee9bae642a50a76&"
                                className="shrink-0 aspect-square w-[18px]"
                            />
                            <div>Penny</div>
                        </div>
                        <div className="flex gap-1.5 mt-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d5af4a415082d9630dc5c549cb4242ec294074ebfd9ff600c2ffda67cd2db01?apiKey=26ead33fc8694363aee9bae642a50a76&"
                                className="shrink-0 aspect-square w-[18px]"
                            />
                            <div className="my-auto">20 minutes</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col my-auto font-bold">
                    <div className="justify-center px-1.5 py-2 text-xs text-white bg-emerald-800 rounded-2xl">
                        50% OFF
                    </div>
                    <div className="flex flex-col items-start pr-1.5 pl-3 mt-4 text-sm text-neutral-900">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/68bfcbbb47d758264ea4e4a1d6bdee5bf86782e5e976cd3abb5590459ef2bfdb?apiKey=26ead33fc8694363aee9bae642a50a76&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/68bfcbbb47d758264ea4e4a1d6bdee5bf86782e5e976cd3abb5590459ef2bfdb?apiKey=26ead33fc8694363aee9bae642a50a76&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68bfcbbb47d758264ea4e4a1d6bdee5bf86782e5e976cd3abb5590459ef2bfdb?apiKey=26ead33fc8694363aee9bae642a50a76&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/68bfcbbb47d758264ea4e4a1d6bdee5bf86782e5e976cd3abb5590459ef2bfdb?apiKey=26ead33fc8694363aee9bae642a50a76&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/68bfcbbb47d758264ea4e4a1d6bdee5bf86782e5e976cd3abb5590459ef2bfdb?apiKey=26ead33fc8694363aee9bae642a50a76&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68bfcbbb47d758264ea4e4a1d6bdee5bf86782e5e976cd3abb5590459ef2bfdb?apiKey=26ead33fc8694363aee9bae642a50a76&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/68bfcbbb47d758264ea4e4a1d6bdee5bf86782e5e976cd3abb5590459ef2bfdb?apiKey=26ead33fc8694363aee9bae642a50a76&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/68bfcbbb47d758264ea4e4a1d6bdee5bf86782e5e976cd3abb5590459ef2bfdb?apiKey=26ead33fc8694363aee9bae642a50a76&"
                            className="border-red-600 border-solid aspect-[2] border-[3px] stroke-[3px] stroke-red-600 w-[42px]"
                        />
                        <div className="mt-4">2,29 € </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start mt-5 w-full bg-white rounded-xl border border-solid shadow-sm border-black border-opacity-10 max-w-[345px]">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d9f1ed1305136d74a711357b9ee5004fcc1e17a2c989911aff91ae550dde7cf?apiKey=26ead33fc8694363aee9bae642a50a76&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d9f1ed1305136d74a711357b9ee5004fcc1e17a2c989911aff91ae550dde7cf?apiKey=26ead33fc8694363aee9bae642a50a76&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d9f1ed1305136d74a711357b9ee5004fcc1e17a2c989911aff91ae550dde7cf?apiKey=26ead33fc8694363aee9bae642a50a76&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d9f1ed1305136d74a711357b9ee5004fcc1e17a2c989911aff91ae550dde7cf?apiKey=26ead33fc8694363aee9bae642a50a76&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d9f1ed1305136d74a711357b9ee5004fcc1e17a2c989911aff91ae550dde7cf?apiKey=26ead33fc8694363aee9bae642a50a76&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d9f1ed1305136d74a711357b9ee5004fcc1e17a2c989911aff91ae550dde7cf?apiKey=26ead33fc8694363aee9bae642a50a76&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d9f1ed1305136d74a711357b9ee5004fcc1e17a2c989911aff91ae550dde7cf?apiKey=26ead33fc8694363aee9bae642a50a76&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d9f1ed1305136d74a711357b9ee5004fcc1e17a2c989911aff91ae550dde7cf?apiKey=26ead33fc8694363aee9bae642a50a76&"
                    className="max-w-full aspect-[1.67] w-[125px]"
                />
                <div className="flex gap-5 justify-center px-8 py-0.5 w-full bg-orange-800 shadow-sm">
                    <div className="flex flex-col pt-1.5 my-auto text-xs text-white whitespace-nowrap">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdf53b0d63f0467b206ea09104231087f6296f4e9cf46bc2a6d320cb4e4dea32?apiKey=26ead33fc8694363aee9bae642a50a76&"
                            className="self-center aspect-square fill-white w-[18px]"
                        />
                        <div className="mt-1.5">Products</div>
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="flex flex-col self-start">
                            <div className="text-lg font-medium text-neutral-900">
                                Chicken Curry
                            </div>
                            <div className="flex gap-1.5 mt-5 text-sm whitespace-nowrap text-neutral-900 text-opacity-50">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8e8aa0dcde0aa025f79ff7a71a45f8f14f8c3628c72c214943af97c4da911c?apiKey=26ead33fc8694363aee9bae642a50a76&"
                                    className="shrink-0 aspect-square w-[18px]"
                                />
                                <div>Penny</div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/34d720596d4361bc6007f1673e87e4fde6fb3a0436999fc42f6b4a93049e89dc?apiKey=26ead33fc8694363aee9bae642a50a76&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/34d720596d4361bc6007f1673e87e4fde6fb3a0436999fc42f6b4a93049e89dc?apiKey=26ead33fc8694363aee9bae642a50a76&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34d720596d4361bc6007f1673e87e4fde6fb3a0436999fc42f6b4a93049e89dc?apiKey=26ead33fc8694363aee9bae642a50a76&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/34d720596d4361bc6007f1673e87e4fde6fb3a0436999fc42f6b4a93049e89dc?apiKey=26ead33fc8694363aee9bae642a50a76&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/34d720596d4361bc6007f1673e87e4fde6fb3a0436999fc42f6b4a93049e89dc?apiKey=26ead33fc8694363aee9bae642a50a76&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34d720596d4361bc6007f1673e87e4fde6fb3a0436999fc42f6b4a93049e89dc?apiKey=26ead33fc8694363aee9bae642a50a76&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/34d720596d4361bc6007f1673e87e4fde6fb3a0436999fc42f6b4a93049e89dc?apiKey=26ead33fc8694363aee9bae642a50a76&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/34d720596d4361bc6007f1673e87e4fde6fb3a0436999fc42f6b4a93049e89dc?apiKey=26ead33fc8694363aee9bae642a50a76&"
                                className="self-center rounded-2xl aspect-[1.72] w-[59px]"
                            />
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/853eece10ed333c46442101254ceaf80a006bc026d82561e7400d3b9c5138a2a?apiKey=26ead33fc8694363aee9bae642a50a76&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/853eece10ed333c46442101254ceaf80a006bc026d82561e7400d3b9c5138a2a?apiKey=26ead33fc8694363aee9bae642a50a76&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/853eece10ed333c46442101254ceaf80a006bc026d82561e7400d3b9c5138a2a?apiKey=26ead33fc8694363aee9bae642a50a76&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/853eece10ed333c46442101254ceaf80a006bc026d82561e7400d3b9c5138a2a?apiKey=26ead33fc8694363aee9bae642a50a76&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/853eece10ed333c46442101254ceaf80a006bc026d82561e7400d3b9c5138a2a?apiKey=26ead33fc8694363aee9bae642a50a76&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/853eece10ed333c46442101254ceaf80a006bc026d82561e7400d3b9c5138a2a?apiKey=26ead33fc8694363aee9bae642a50a76&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/853eece10ed333c46442101254ceaf80a006bc026d82561e7400d3b9c5138a2a?apiKey=26ead33fc8694363aee9bae642a50a76&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/853eece10ed333c46442101254ceaf80a006bc026d82561e7400d3b9c5138a2a?apiKey=26ead33fc8694363aee9bae642a50a76&"
                                className="mt-2 ml-3 border-red-600 border-solid aspect-[2.04] border-[3px] stroke-[3px] stroke-red-600 w-[43px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MyComponent;