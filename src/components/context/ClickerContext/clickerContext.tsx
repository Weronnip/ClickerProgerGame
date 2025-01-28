import { useBalance } from '../Balance/balance';
import { ClickerContextType } from './types/ClickerContext.types';
import { createContext, useContext, useState, ReactNode } from 'react';

const ClickerContext = createContext<ClickerContextType | undefined>(undefined);

export function ClickerProvider({ children }: { children: ReactNode }) {
    const [clickPower, setClickPower] = useState<number>(1);
    const { balance, updateBalance, resetBalance } = useBalance(0);
    const [characterImage, setCharacterImage] = useState<string>(
        'https://i.pinimg.com/originals/80/7b/5c/807b5c4b02e765bb4930b7c66662ef4b.gif'
    );

    function increaseClickPower(bonus: number) {
        setClickPower((prev) => prev + bonus);
    }

    function handleItemBuy(price: number, item_id: number) {
        if (balance >= price) {
            updateBalance(-price);
            switch (item_id) {
                case 5:
                    setCharacterImage("https://i.pinimg.com/originals/e8/d0/f1/e8d0f1794e2520ac2367c1d21c0966e9.gif");
                    break;
                case 6:
                    setCharacterImage("https://i.pinimg.com/736x/89/e8/26/89e8266d4108cb2ae61a94608d033566.jpg");
                    break;
                case 7:
                    setCharacterImage("https://i.pinimg.com/474x/8c/2b/15/8c2b15ee828ef37b2494c777fd6d7480.jpg");
                    break;
                case 8:
                    setCharacterImage("https://i.pinimg.com/474x/b1/ba/9b/b1ba9b39ff081cb849e30d4b5aecdaa3.jpg");
                    break;
                default:
                    break;
            }
        } else {
            alert("Недостаточно средств для покупки");
        }
    }
    

    return (
        <ClickerContext.Provider
            value={{
                balance,
                updateBalance,
                resetBalance,
                clickPower,
                setClickPower: increaseClickPower,
                characterImage,
                setCharacterImage,
                handleItemBuy,
            }}
        >
            {children}
        </ClickerContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useClickerContext() {
    const context = useContext(ClickerContext);
    if (!context) {
        throw new Error("useClickerContext must be used within a ClickerProvider");
    }
    return context;
}
