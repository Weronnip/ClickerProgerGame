import { useState } from "react";
import { ShopItem } from "../shop/shop";
import styles from "./styles/clicker.module.css";
import { useClickerContext } from "../context/ClickerContext/clickerContext";

export function Clicker() {
    const [isOpen, setIsOpen] = useState(false);
    const { balance, updateBalance, clickPower, characterImage, handleItemBuy } = useClickerContext();

    function handleToggleOpen() {
        setIsOpen(!isOpen);
    }

    function handleClick() {
        updateBalance(clickPower);
    }

    return (
        <>
            <section className={styles.wrapper}>
                <button onClick={handleClick} className={styles.bth_clicker}>
                    <img src={characterImage} alt="clicker here" className={styles.characterImage} />
                </button>
                <span className={styles.balance}>Ваш баланс: {balance}</span>
                <span>Мощность клика: {clickPower}</span>
            </section>

            {isOpen && <ShopItem onClose={handleToggleOpen} onItemBuy={handleItemBuy} />}
        </>
    );
}
