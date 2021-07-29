const Cart = require("../src/js/Cart");
const Product = require("../src/js/Product")

describe("Cart", () => {
  // arrange.
  let fruits = new Cart();
   // arrange. 
   let apples = new Product("apples", 1.00, true);
  // arrange. 
  let oranges = new Product("oranges", 0.80, true);
  // arrange. 
   let cherries = new Product("cherries", 3.00, true);
  // arrange. 
  let mangoes = new Product("mangoes", 1.20, true);
  // arrange
  let bananas = new Product("bananas", 0.50, false);
  // arrange
  let grapes = new Product("grapes", 2.00, false);

  test("Confirm that the constructor correctly sets the items property to an empty array.", () => {
    expect(fruits.items).toEqual([]);
  })

  test("Calling add once adds one product to the items array.", () => {
    expect(add(apples)).toEqual(fruits.items = [apples]);
  })





});