import { useState, useRef } from "react";
import { ShopItem } from "../shop/shop";
import styles from "./styles/clicker.module.css";
import { useClickerContext } from "../context/ClickerContext/clickerContext";

export function Clicker() {
    const [isOpen, setIsOpen] = useState(false);
    const [isStart, setIsStart] = useState(false);
    const intervalRef = useRef<number | null>();
    const { balance, updateBalance, clickPower, characterImage, setClickPower, setCharacterImage } = useClickerContext();

    function handleToggleOpen() {
        setIsOpen(!isOpen);
    }

    function AutoClicker() {
        if (isStart) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            setIsStart(false);
        } else {
            intervalRef.current = window.setInterval(() => {
                updateBalance(clickPower);
            }, 1000);
            setIsStart(true);
        }
    }

    function handleClick() {
        updateBalance(clickPower);
    }

    function handleItemBuy(price: number, item_id: number, bonus: number) {
        if (balance >= price) {
            updateBalance(-price); 
            setClickPower(clickPower + bonus)

            switch (item_id) {
                case 5:
                    setCharacterImage('https://i.pinimg.com/originals/e8/d0/f1/e8d0f1794e2520ac2367c1d21c0966e9.gif');
                    break;
                case 6:
                    setCharacterImage('https://i.pinimg.com/736x/89/e8/26/89e8266d4108cb2ae61a94608d033566.jpg');
                    break;
                case 7:
                    setCharacterImage('https://i.pinimg.com/474x/8c/2b/15/8c2b15ee828ef37b2494c777fd6d7480.jpg');
                    break;
                case 8:
                    setCharacterImage('https://i.pinimg.com/474x/b1/ba/9b/b1ba9b39ff081cb849e30d4b5aecdaa3.jpg');
                    break;
            }
        } else {
            alert('Недостаточно средств для покупки');
        }
    }

    return (
        <>
            <section className={styles.wrapper}>
                <button onClick={handleClick} className={styles.bth_clicker}>
                    <img src={characterImage} alt="clicker here" className={styles.characterImage} />
                </button>
                <span className={styles.balance}>Ваш баланс: {balance}</span>
                <span className={styles.auto_clicker} onClick={AutoClicker}>Авто клик: {isStart ? 'Дюпает' : 'Спит'}</span>
                <span className={styles.power}>Мощность клика: {clickPower}</span>
            </section>
            {isOpen && <ShopItem onClose={handleToggleOpen} onItemBuy={handleItemBuy} />}
        </>
    );
}
