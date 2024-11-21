import { useState, useEffect } from 'react';

export function useBalance(initialBalance = 0) {
    const [balance, setBalance] = useState<number>(() => {
        const savedBalance = localStorage.getItem('Balance');
        return savedBalance ? parseInt(savedBalance) : initialBalance;
    });

    useEffect(() => {
        localStorage.setItem('Balance', balance.toString());
    }, [balance]);

    const updateBalance = (amount: number) => {
        setBalance(prevBalance => Math.max(prevBalance + amount, 0));
    };

    function resetBalance() {
        setBalance(initialBalance)
    }

    return { balance, updateBalance, resetBalance };
}
