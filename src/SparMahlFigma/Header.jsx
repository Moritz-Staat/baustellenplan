import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex flex-col items-center self-stretch pb-6 w-full bg-orange-800 rounded-none">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e91c9938ccfdf1df946c31fe55266be282893d00e12d6d63874fe2af30d74a75?apiKey=26ead33fc8694363aee9bae642a50a76&" alt="" className="self-stretch w-full aspect-[8.33]" />
            <div className="flex gap-5 justify-between px-5 mt-3 w-full max-w-[385px]">
                <h1 className="my-auto text-2xl text-white">SparMahl</h1>
                <div className="flex gap-3">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dae7ac0cc1d9a103a92d6f4fac4c16f8873bbcc39680d03314dee19527b394d?apiKey=26ead33fc8694363aee9bae642a50a76&" alt="" className="shrink-0 border border-white border-solid aspect-square w-[30px]" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/33255c20bdeeee9c6280d33abe89c6fbb2642eba7452cc8524ef22f2ecbd2e54?apiKey=26ead33fc8694363aee9bae642a50a76&" alt="" className="shrink-0 rounded-full aspect-square w-[30px]" />
                </div>
            </div>
        </header>
    );
};

export default Header;