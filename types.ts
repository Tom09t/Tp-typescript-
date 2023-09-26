type Rating = {
    count: number;
    rate: number;
}

export type product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}