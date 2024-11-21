/* eslint-disable react-refresh/only-export-components */
import { ClickerContextType } from './types/ClickerContext.types';
import { createContext, useContext, useState, ReactNode } from 'react';

const ClickerContext = createContext<ClickerContextType | undefined>(undefined);

export function ClickerProvider({ children }: { children: ReactNode }) {
    const [balance, setBalance] = useState<number>(0);
    const [characterImage, setCharacterImage] = useState<string>(
        'https://i.pinimg.com/originals/80/7b/5c/807b5c4b02e765bb4930b7c66662ef4b.gif'
    );

    function updateBalance(amount: number) {
        setBalance(prev => prev + amount);
    }

    function resetBalance() {
        setBalance(0);
    }

    return (
        <ClickerContext.Provider
            value={{
                balance,
                updateBalance,
                resetBalance,
                characterImage,
                setCharacterImage
            }}
        >
            {children}
        </ClickerContext.Provider>
    );
}

export function useClickerContext() {
    const context = useContext(ClickerContext);
    if (!context) {
        throw new Error("useClickerContext must be used within a ClickerProvider");
    }
    return context;
}
