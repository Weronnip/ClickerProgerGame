/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, useContext, useState } from 'react';

const ShopContext = createContext<any>(null);

export function ShopProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleShop() {
        setIsOpen((prev) => !prev);
    }

    return (
        <ShopContext.Provider value={{ isOpen, toggleShop }}>
            {children}
        </ShopContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useShopContext() {
    return useContext(ShopContext);
}
