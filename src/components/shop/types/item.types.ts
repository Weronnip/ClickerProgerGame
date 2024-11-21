export interface Items {
    item_id: number;
    name_item: string;
    item_img: string;
    description: string | null;
    price: number;
    bonus: number;
    bought: boolean;
}