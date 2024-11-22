import { Checkout } from "./checkout";
import { pricingRules } from "./pricingRules";
import { catalogue } from "./product";
const co = new Checkout(pricingRules, catalogue);
// co.scan("atv");
// co.scan("ipd");
// co.scan("ipd");
// co.scan("atv");
// co.scan("ipd");
// co.scan("ipd");
// co.scan("ipd");

 co.scan("atv");
 co.scan("atv");
 co.scan("atv");
 co.scan("vga");



console.log("Total: $" + co.total().toFixed(2));
