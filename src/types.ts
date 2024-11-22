export type PricingRule = {
    sku: string;
    discount: (items: string[], price: number) => number;
};
export type Product = {
    sku: string;
    name: string;
    price: number;
};