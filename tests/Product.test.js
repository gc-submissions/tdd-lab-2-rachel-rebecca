const Product = require("../src/js/Product");


describe("Product", () => {
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


  test("Confirm that the constructor parameters correctly set three properties on the class", () => {
    // assert
    expect(apples).toEqual({name:"apples",price:1.00,taxable:true});
  })

  test("Confirm that the constructor parameters correctly set three properties on the class", () => {
    // assert
    expect(oranges).toEqual({name:"oranges",price:0.80,taxable:true});
  })

  test("Given a Product with taxable true, getPriceWithTax returns the price + 10%", () => {
    // assert
    expect(cherries.getPriceWithTax()).toBeCloseTo(3.30);
  })

  test("Given a Product with taxable true, getPriceWithTax returns the price + 10%", () => {
    // assert
    expect(mangoes.getPriceWithTax()).toBeCloseTo(1.32);
  })

  test("Given a Product with taxable false, getPriceWithTax returns just the price.", () => {
    // assert
    expect(bananas.getPriceWithTax()).toBeCloseTo(bananas.price);
  })

  test("Given a Product with taxable false, getPriceWithTax returns just the price.", () => {
    // assert
    expect(grapes.getPriceWithTax()).toBeCloseTo(grapes.price);
  })

})