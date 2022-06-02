'use strict';

const init = function (){

const price = document.getElementById('price');
const discount = document.getElementById('discount');
const btnCalculate = document.querySelector('#btn-calculate');

const result = document.getElementById('result');
const disc = document.getElementById('disc');
console.log(disc.textContent)

btnCalculate.addEventListener('click', calculate);
}

const calculate = function () {
    const priceInt = Number(price.value);
    const discountInt = Number(discount.value);
    const discountReduced = priceInt * (discountInt * 0.01);
    console.log(discountReduced);
    const resultNumber = (priceInt - discountReduced);  
    disc.textContent = String(discountReduced);
    result.textContent = String(resultNumber);
    
}

init();