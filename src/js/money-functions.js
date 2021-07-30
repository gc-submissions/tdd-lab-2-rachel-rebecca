function formatCurrency(amount) {
    amount = Math.ceil(amount * 100) / 100;
    let twoDecimals = amount.toFixed(2);
    if (twoDecimals.includes("-")) {
        let removeMinus = twoDecimals.substring(1)
        let dollarSign = "-$" + removeMinus;
       return dollarSign;
    }
    return "$" + twoDecimals;
}




function getCoins(cents) {
    
    quarters = Math.floor(cents / 25);
    cents = cents % 25;
    dimes = Math.floor(cents / 10);
    cents = cents % 10;
    nickels = Math.floor(cents / 5);
    cents = cents % 5;
    pennies = Math.floor(cents / 1);
   
    let change = {
        quarters: quarters,
        dimes: dimes,
        nickels: nickels,
        pennies: pennies
    }
    return change
}

module.exports = {
    formatCurrency, getCoins
} // using destructuring to grab more than one function from one source file