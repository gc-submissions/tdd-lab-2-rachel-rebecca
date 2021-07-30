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

module.exports = formatCurrency;