import { PricingRule, Product } from './types'
export class Checkout {
  private pricingRules: PricingRule[];
  private cart: string[];
  private catalogue: Record<string, Product>;
  constructor(pricingRules: PricingRule[], catalogue: Product[]) {
    this.pricingRules = pricingRules;
    this.cart = [];
    this.catalogue = catalogue.reduce((acc, product) => {
      acc[product.sku] = product;
      return acc;
    }, {} as Record<string, Product>);
  }
  scan(sku: string): void {
    if (!this.catalogue[sku]) {
      throw new Error(`Product with SKU "${sku}" not found.`);
    }
    this.cart.push(sku);
  }
  total(): number {
    let total = 0;
    const groupedItems = this.cart.reduce((acc, sku) => {
      acc[sku] = (acc[sku] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    for (const [sku, count] of Object.entries(groupedItems)) {
      const product = this.catalogue[sku];
      const pricingRule = this.pricingRules.find((rule) => rule.sku === sku);
      if (pricingRule) {
        total += pricingRule.discount(Array(count).fill(sku), product.price);
      } else {
        total += count * product.price;
      }
    }
    return parseFloat(total.toFixed(2));
  }
}
