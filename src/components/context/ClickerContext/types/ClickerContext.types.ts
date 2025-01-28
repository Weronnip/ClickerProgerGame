export type ClickerContextType = {
    balance: number;
    updateBalance: (amount: number) => void;
    resetBalance: () => void;
    clickPower: number;
    setClickPower: (bonus: number) => void;
    characterImage: string;
    setCharacterImage: (image: string) => void;
    handleItemBuy: (price: number, bonus: number, item_id: number) => void;
};
