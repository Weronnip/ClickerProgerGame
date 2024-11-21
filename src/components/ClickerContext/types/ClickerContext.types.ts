export type ClickerContextType = {
    balance: number;
    updateBalance: (amount: number) => void;
    resetBalance: () => void;
    characterImage: string;
    setCharacterImage: (image: string) => void;
}