"use strict";

function lSum(x, y, ...others) {
    return BigInt(x) + BigInt(y) + others.reduce( (sum, item) => sum += BigInt(item), 0n);
}

function lMul(x, y, ...others) {
    return BigInt(x) * BigInt(y) * others.reduce( (sum, item) => sum *= BigInt(item), 1n);
}

function lSub(x, y, ...others) {
    return BigInt(x) - BigInt(y) - others.reduce( (sum, item) => sum -= BigInt(item), 0n);
}

function lDiv(x, y, ...others) {
    return BigInt(x) / BigInt(y) / others.reduce( (sum, item) => sum *= BigInt(item), 1n);
}

let x = 465468784654687583475634756347563475637456534756534756347568537567346573468573n;
let z = 5180177860891957963178911808109081090007109110709919812109276947889999758684891;

console.log(x + "\n" + lSum(x, z, 2, 2) );
