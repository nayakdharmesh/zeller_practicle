import { PricingRule } from './types'
export const pricingRules: PricingRule[] = [
    {
        sku: "atv",
        discount: (items, price) => {
            if (items.length < 3) {
                return items.length * price;
            } else {
                const eligibleForDiscount = Math.floor(items.length / 3);
                const remainder = items.length % 3;
                return (eligibleForDiscount * 2 + remainder) * price;
            }
        },
    },
    {
        sku: "ipd",
        discount: (items, price) => {
            const count = items.length;
            if (count > 4) {
                return count * 499.99;
            }
            return count * price;
        },
    },
];
