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

const solution = {
  status: "OPEN",
  change: []
};

function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
}

function toValue(coin) {
    let value = 0;
    
    switch (coin) {
        case "PENNY":
            value = 0.01;
            break;
        case "NICKEL":
            value = 0.05;
            break;
        case "DIME":
            value = 0.1;
            break;
        case "QUARTER":
            value = 0.25;
            break;
        case "ONE":
            value = 1;
            break;
        case "FIVE":
            value = 5;
            break;
        case "TEN":
            value = 10;
            break;
        case "TWENTY":
            value = 20;
            break;
        case "ONE HUNDRED":
            value = 100;
            break;
    }

    return value;
}

function toCoinName(value) {
    let coinName = "";
    
    switch (value) {
        case 0.01:
            coinName = "PENNY";
            break;
        case 0.05:
            coinName = "NICKEL";
            break;
        case 0.1:
            coinName = "DIME";
            break;
        case 0.25:
            coinName = "QUARTER";
            break;
        case 1:
            coinName = "ONE";
            break;
        case 5:
            coinName = "FIVE";
            break;
        case 10:
            coinName = "TEN";
            break;
        case 20:
            coinName = "TWENTY";
            break;
        case 100:
            coinName = "ONE HUNDRED";
            break;
    }

    return coinName;
}

function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let sortedCid = cid.map(coin => [toValue(coin[0]), Math.round(coin[1]/toValue(coin[0]))]);
    // let solution = [];

    sortedCid.sort(function (a, b) {
        return b[0] - a[0];
    });

    //console.log(cid);
    console.log(sortedCid);
    //console.log("change: " + change);
    
    let changeDue = [...sortedCid];
    let coins = 0;
    let coinsUnits = 0;

    while (/*change != 0 && */changeDue.length != 0) {
        let coinsAndValue = changeDue.shift(); //<v, k> < - choose - coins(C)
            coinsUnits = Math.min(coinsAndValue[1], Math.floor(change / coinsAndValue[0]));
            console.log("coinValue: " + coinsAndValue + " coinsUnits: " + coinsUnits + " change: " + change + " change/coinValue: " + Math.floor(change/coinsAndValue[0]));
            if (coinsUnits > 0) {
                solution.change.push([toCoinName(coinsAndValue[0]), coinsAndValue[0]*coinsUnits]);
                change = Math.round( (change - (coinsAndValue[0] * coinsUnits)) *100 ) / 100;
                console.log("   change: " + change + " coin*value: " + coinsAndValue[0]*coinsUnits);
            }
    }

    console.log(solution);
    return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01],["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);