import { Checkout } from "../src/checkout";
import { pricingRules } from "../src/pricingRules";
import { catalogue } from "../src/product";

describe("Checkout System", () => {
  let co: Checkout;
  beforeEach(() => {
    co = new Checkout(pricingRules, catalogue);
  });
  test("Scenario 1: atv, atv, atv, vga", () => {
    co.scan("atv");
    co.scan("atv");
    co.scan("atv");
    co.scan("vga");
    expect(co.total()).toBe(249.00);
  });
  test("Scenario 2: atv, ipd, ipd, atv, ipd, ipd, ipd", () => {
    co.scan("atv");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("atv");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    expect(co.total()).toBe(2718.95);
  });
  test("Invalid SKU throws an error", () => {
    expect(() => co.scan("unknown")).toThrowError("Product with SKU \"unknown\" not found.");
  });
  test("Empty cart total is zero", () => {
    expect(co.total()).toBe(0);
  });
});
