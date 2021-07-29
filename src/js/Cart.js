class Cart {
    constructor() {
        this.items = [];
    }
    add(product){
        return this.items.push(product);
    }
    getItemCount() {
        return this.items.length;
    }
    getTotalBeforeTax(){
        let sumOfPrices = 0;
        let itemPrices = items.map(product => product.price);
        itemPrices.forEach(function(item) {
            sumOfPrices += item;
        })
        return sumOfPrices
    }
    getTotalWithTax(){
        let sumOfPricesTaxed = 0;
        items.forEach(function(item) {
           sumOfPricesTaxed += item.getTotalWithTax();
        })
        return sumOfPricesTaxed;
    }
    
    getTax(){
        return this.getTotalWithTax() - this.getTotalBeforeTax();
    }

}

module.exports = Cart;