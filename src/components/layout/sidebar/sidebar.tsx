import { useState } from 'react';
import { ShopItem } from '../../shop/shop';
import styles from './styles/sidebar.module.css';
// import { useShopContext } from '../../context/ShopContext/shopContext';
import { useClickerContext } from '../../context/ClickerContext/clickerContext';

export function Sidebar() {
    const [isOpenShop, setIsOpenShop] = useState(false);
    const [isOpenSettings, setIsOpenSettings] = useState(false);
    const { balance, updateBalance, resetBalance, characterImage, setCharacterImage } = useClickerContext();

    function handleToggleShop() {
        setIsOpenShop(!isOpenShop)
    }

    function handleToggleSettings() {
        setIsOpenSettings(!isOpenSettings);
    }
    function handleItemBuy(price: number, item_id: number) {
        if (balance >= price) {
            updateBalance(-price); 
            
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
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Proger Clicker</h3>
                <nav className={styles.nav_item}>
                    <li className={styles.item}>Ваш баланс: {balance}</li>
                    <li className={styles.item} onClick={handleToggleShop}>Магазин</li>
                    <li className={styles.item} onClick={handleToggleSettings}>Настройки</li>
                    <li className={styles.item} onClick={resetBalance}>Сбросить баланс</li>
                    <li className={styles.item}>
                        <img src={characterImage} alt="clicker here" className={styles.characterImage}/>
                    </li>
                </nav>  
            </div>
    
            { isOpenShop && <ShopItem onClose={handleToggleShop} onItemBuy={handleItemBuy}/> }
        </>
    );
}
