const purchases = {
    regular: [150, 50, 250, 300, 265],
    increased: [3000, 1500],
    special: [6000],
}
let sumPurchasesRegular = 0;
for (const purchaseRegular of purchases.regular) {
    sumPurchasesRegular += purchaseRegular;
}
let sumPurchasesIncreased = 0;
for (const purchaseIncreased of purchases.increased) {
    sumPurchasesIncreased += purchaseIncreased;
}
let sumPurchasesSpecial = 0;
for (const purchaseSpecial of purchases.special) {
    sumPurchasesSpecial += purchaseSpecial;
}

cashbackRegular = sumPurchasesRegular * 0.01;
cashbackIncreased = sumPurchasesIncreased * 0.05;
cashbackSpecial = sumPurchasesSpecial *0.3;

let cashback = cashbackIncreased + cashbackRegular + cashbackSpecial;

if (cashback >= 3000){
    cashback = 3000;
    console.log(cashback);
}
else{
    console.log(cashback);
}