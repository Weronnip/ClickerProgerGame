import { useState } from 'react';
import { Items } from './types/item.types';
import styles from './styles/shop.module.css';

export function ShopItem({ onClose, onItemBuy }: 
    { onClose: () => void; 
    onItemBuy: (price: number ,bonus: number, item_id: number) => void}) {
    const [items, setItems] = useState<Items[]>([
        {
            item_id: 1,
            name_item: 'UP Clicker +10',
            description: 'up clicker level!',
            price: 10,
            item_img: 'https://i.pinimg.com/originals/dc/ec/92/dcec92cb65015e4d9a83ec238c683dd8.gif',
            bought: false,
            bonus: 10
        },
        {
            item_id: 2,
            name_item: 'UP Clicker +50',
            description: 'up clicker level!',
            price: 10,
            item_img: 'https://i.pinimg.com/originals/dc/ec/92/dcec92cb65015e4d9a83ec238c683dd8.gif',
            bought: false,
            bonus: 50
        },
        {
            item_id: 3,
            name_item: 'UP Clicker +100',
            description: 'up clicker level!',
            price: 10,
            item_img: 'https://i.pinimg.com/originals/ea/d5/98/ead5980765551c53b7d861ca4a8f2988.gif',
            bought: false,
            bonus: 100
        },
        {
            item_id: 4,
            name_item: 'Super CLICK',
            description: 'Super skill!',
            price: 10,
            item_img: 'https://i.pinimg.com/originals/48/2f/f3/482ff37c43387b76de1161edb4d04977.gif',
            bought: false,
            bonus: 5000
        },
        {
            item_id: 5,
            name_item: 'Cat proger',
            description: 'Hero cat clicker!',
            price: 10,
            item_img: 'https://i.pinimg.com/originals/e8/d0/f1/e8d0f1794e2520ac2367c1d21c0966e9.gif',
            bought: false,
            bonus: 10000
        },
        {
            item_id: 6,
            name_item: 'Proger Junior',
            description: 'Hero Junior proger clicker!',
            price: 10,
            item_img: 'https://i.pinimg.com/736x/89/e8/26/89e8266d4108cb2ae61a94608d033566.jpg',
            bought: false,
            bonus: 50000
        },
        {
            item_id: 7,
            name_item: 'Proger middle',
            description: 'Hero middle proger clicker!',
            price: 10,
            item_img: 'https://i.pinimg.com/474x/8c/2b/15/8c2b15ee828ef37b2494c777fd6d7480.jpg',
            bought: false,
            bonus: 100000
        },
        {
            item_id: 8,
            name_item: 'Proger senior',
            description: 'Hero senior proger clicker!',
            price: 10,
            item_img: 'https://i.pinimg.com/474x/b1/ba/9b/b1ba9b39ff081cb849e30d4b5aecdaa3.jpg',
            bought: false,
            bonus: 5000000
        },
        {
            item_id: 9,
            name_item: 'HACKER CLICKER',
            description: 'Super cheater ProgCoin!',
            price: 10,
            item_img: 'https://i.pinimg.com/originals/90/52/50/90525082e9d7cd55520f4f287067955b.gif',
            bought: false,
            bonus: 99999999
        }
    ])

    function handleBuy(item_id: number, price: number, bonus: number) {
        if (!items.find(item => item.item_id === item_id)?.bought) {
            setItems(items.map(item => {
                if (item.item_id === item_id && !item.bought) {
                    return {...item, bought: true};
                }
                return item;
            }));
            console.log("Updating item:", item_id);
            onItemBuy(price, bonus, item_id);
        }
    }

    return (
        <>
            <section className={styles.wrapper}>
                <h1 className={styles.title}>Shop Clicker</h1>
                <button className={styles.close_windows} onClick={onClose}>
                    X
                </button>
                {items.map((item) => (
                    <div className={styles.items} key={item.item_id}>
                        <img src={item.item_img} alt={item.name_item} className={styles.img_item}/>
                        <h4 className={styles.name_item}>{item.name_item}</h4>
                        <p className={styles.description}>{item.description}</p>
                        <button className={styles.buy_item} 
                            onClick={() => handleBuy(item.item_id, item.price, item.bonus)}
                            disabled={item.bought}>{item.bought ? 'Bought' : `Buy: ${item.price}`}
                        </button> 
                    </div>
                ))}
            </section>
        </>
    );
}