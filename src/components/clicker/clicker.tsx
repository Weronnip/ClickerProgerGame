import { useState } from "react";
import { ShopItem } from "../shop/shop";
import styles from "./styles/clicker.module.css";
import { useClickerContext } from "../ClickerContext/clickerContext";

export function Clicker() {
    const [isOpen, setIsOpen] = useState(false);
    const [clickPower, setClickPower] = useState(1);
    const { balance, updateBalance, characterImage, setCharacterImage } = useClickerContext();

    function handleToggleOpen() {
        setIsOpen(!isOpen);
    }

    function handleClick() {
        updateBalance(clickPower);
    }

    function handleItemBuy(price: number, bonus: number, item_id: number) {
        console.log("handleItemBuy invoked:", { price, bonus, item_id, balance });
        if (balance >= price) {
            updateBalance(-price);
            setClickPower(prev => prev + bonus)

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
            }
        } else {
            alert("Недостаточно средств для покупки");
        }
    }

    return (
        <>
            <section className={styles.wrapper}>
                <button onClick={handleClick} className={styles.bth_clicker}>
                    <img src={characterImage} alt="clicker here" className={styles.characterImage} />
                </button>
                <span className={styles.balance}>Ваш баланс: {balance}</span>
            </section>

            {isOpen && <ShopItem onClose={handleToggleOpen} onItemBuy={handleItemBuy} />}
        </>
    );
}