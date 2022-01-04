/*
M = coins
c = change
v = coin value
k = coin units

change: M x c -> M x S
C <- M
S <- empty

while c =! 0 && C != empty
{
    <v, k> <- choose-coins (C)
    C <- C - { <v, k> }
    k <- min (k, c / v)
    if k > 0
        S <- S + { <v, k> }
        c <- c - v * k
}

choose-coins: C -> v * k
{
    v <- inf
    for <a, b> in C
    {
        if a > v
        {
            <v, k> <- <a, b>
        }
    }
}
*/

function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
}

function toValue(coin) {
    switch (coin) {
        case "PENNY":
            return 0.01;
            break;
        case "NICKEL":
            return 0.05;
            break;
        case "DIME":
            return 0.1;
            break;
        case "QUARTER":
            return 0.25;
            break;
        case "ONE":
            return 1;
            break;
        case "FIVE":
            return 5;
            break;
        case "TEN":
            return 10;
            break;
        case "TWENTY":
            return 20;
            break;
        case "ONE HUNDRED":
            return 100;
            break;
    }
}

function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let sortedCid = cid.map(coin => [toValue(coin[0]), coin[1]]);
    let solution = [];

    sortedCid.sort(function (a, b) {
        return b[0] - a[0];
    });

    console.log(cid);
    console.log(sortedCid);

    let changeDue = [...sortedCid];
    let coins = 0;
    let coinsUnits = 0;

    while (change = !0 && !changeDue.empty) {
        let coinValue = changeDue.shift(); //<v, k> < - choose - coins(C)
        //TODO: changeDue = changeDue - { < v, k > };
        console.log(coinValue);
        coinsUnits = Math.min(coinValue[1], coins / coinValue[0]);
        if (coinsUnits > 0) {
            solution.push(coinValue);
            change = change - coinValue[0] * coinValue[1];
        }
    }
/*
choose - coins: C -> v * k
{
    v < - inf
    for <a, b> in C
    {
        if a > v
        {
            <v, k> < - <a, b >
        }
    }
}

*/
    return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);