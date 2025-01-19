import { useState, useEffect } from 'react';

export function useBalance(initialBalance: number) {
    const [balance, setBalance] = useState<number>(() => {
    const savedBalance = localStorage.getItem('Balance');
        return savedBalance ? parseInt(savedBalance) : initialBalance;
    });

    useEffect(() => {
        localStorage.setItem('Balance', balance.toString());
    }, [balance]);

    function updateBalance(amount: number) {
        setBalance(prev => prev + amount);
    }

    function resetBalance() {
        setBalance(initialBalance)
    }

    return { balance, updateBalance, resetBalance };
}
