

// Problem no 2 : Panda Cost

function pandaCost(singara, samucha, jilapi,) {
    let singaraCost = singara * 7;
    let samuchaCost = samucha * 10;
    let jilapiCost = jilapi * 15;
    let totalCost = singaraCost + samuchaCost + jilapiCost;
    
    return totalCost;
}
let totalCost = pandaCost(1, 1, 1);
console.log(totalCost);