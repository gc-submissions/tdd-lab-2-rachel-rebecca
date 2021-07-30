const Cart = require("../src/js/Cart");
const Product = require("../src/js/Product");

describe("Cart", () => {
  // arrange.
  let fruits = new Cart();
  // arrange.
  let apples = new Product("apples", 1.0, true);
  // arrange.
  let oranges = new Product("oranges", 0.8, true);
  // arrange.
  let cherries = new Product("cherries", 3.0, true);
  // arrange.
  let mangoes = new Product("mangoes", 1.2, true);
  // arrange
  let bananas = new Product("bananas", 0.5, false);
  // arrange
  let grapes = new Product("grapes", 2.0, false);

  test("Confirm that the constructor correctly sets the items property to an empty array.", () => {
    // assert.
    expect(fruits.items).toEqual([]);
  });

  test("Calling add once adds one product to the items array.", () => {
    // act.
    fruits.add(apples);
    // assert.
    expect(fruits.items).toEqual([apples]);
  });

  test("Calling add twice leaves a total of two Products in the items array", () => {
    // act.
    fruits.add(oranges); // second time calling add
    // assert.
    // expect(fruits.items).toEqual([oranges]);
    expect(fruits.items).toEqual([{"name": "apples", "price": 1.0, "taxable": true}, {"name": "oranges", "price": 0.8, "taxable": true}]);
  });

  test("getItemCount returns the length of the items array.", () => {
    // assert.
    expect(fruits.getItemCount()).toEqual(2);
  });

  test("getItemCount returns the length of the items array.", () => {
    // act.
    fruits.add(cherries);
    // assert.
    expect(fruits.getItemCount()).toEqual(3);
  });

  test("getTotalBeforeTax returns the sum of the price of all Products in the items array.", () => {
    // assert.
    expect(fruits.getTotalBeforeTax()).toBeCloseTo(4.8);
  });

  test("getTotalBeforeTax returns the sum of the price of all Products in the items array.", () => {
    //act
    fruits.add(bananas); // non-taxable item added.
    // assert.
    expect(fruits.getTotalBeforeTax()).toBeCloseTo(5.3);
  });

  test("getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array", () => {
    // assert.
    expect(fruits.getTotalWithTax()).toBeCloseTo(5.78);
  });

  test("getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array", () => {
    // act
    fruits.add(grapes); // non taxable
    // assert.
    expect(fruits.getTotalWithTax()).toBeCloseTo(7.78);
  });

  test("getTax returns the difference between getTotalWithTax and getTotalBeforeTax", () => {
    // act
    fruits.add(mangoes)
    // assert.
    expect(fruits.getTax()).toBeCloseTo(0.60);
  });


});
