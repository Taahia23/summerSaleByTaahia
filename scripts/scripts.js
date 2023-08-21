document.getElementById('card-1').addEventListener('click', function () {
    const card1Amount = getCardElementValueById('card1-price');
    const previousAmount = getTotalPrice('total-price');
    const totalAmount = previousAmount + card1Amount;
    setTotalPrice('total-price', totalAmount);
    addToProductList('K. Accessories');
})
document.getElementById('card-2').addEventListener('click', function () {
    const card2Amount = getCardElementValueById('card2-price');
    const previousAmount = getTotalPrice('total-price');
    const totalAmount = previousAmount + card2Amount;
    setTotalPrice('total-price', totalAmount);
    addToProductList('K. Accessories');
})
document.getElementById('card-3').addEventListener('click', function () {
    const card3Amount = getCardElementValueById('card3-price');
    const previousAmount = getTotalPrice('total-price');
    const totalAmount = previousAmount + card3Amount;
    setTotalPrice('total-price', totalAmount);
    addToProductList('Home Cooker');
})

document.getElementById('card-4').addEventListener('click', function () {
    const card7Amount = getCardElementValueById('card7-price');
    const previousAmount = getTotalPrice('total-price');
    const totalAmount = previousAmount + card7Amount;
    setTotalPrice('total-price', totalAmount);
    addToProductList('Single Relax Chair');
})
document.getElementById('card-5').addEventListener('click', function () {
    const card8Amount = getCardElementValueById('card8-price');
    const previousAmount = getTotalPrice('total-price');
    const totalAmount = previousAmount + card8Amount;
    setTotalPrice('total-price', totalAmount);
    addToProductList('Children play');
})
document.getElementById('card-6').addEventListener('click', function () {
    const card9Amount = getCardElementValueById('card9-price');
    const previousAmount = getTotalPrice('total-price');
    const totalAmount = previousAmount + card9Amount;
    setTotalPrice('total-price', totalAmount);
    addToProductList('Flexible Sofa');
})


var total = 0;
document.getElementById('btn-apply').addEventListener('click', function () {
    const text = document.getElementById('input-text').value;
    if (text === 'SELL200') {
        const discount = document.getElementById('discountPrice');
        const cal = (total * 20) / 100;
        const totalDiscount = cal.toFixed(2);
        discount.innerText = totalDiscount;

        const totalPay = document.getElementById('total-pay');
        const cal1 = total - totalDiscount;
        const payTotal = cal1.toFixed(2);
        totalPay.innerText = payTotal;
    }
    else {
        alert('put SELL200 coupon code for discount');
    }
})

//for modal
  document.getElementById('btn-Go-home').addEventListener('click',function(){
    document.getElementById('total-price').innerText="0.00";
    document.getElementById('discountPrice').innerText = "0.00";
    document.getElementById('total-pay').innerText= "0.00";
    document.getElementById('product-list').innerHTML = " ";
    
  })

//reuse code
function getCardElementValueById(elementId) {
    const cardField = document.getElementById(elementId);
    const amountString = cardField.innerText;
    const amount = parseFloat(amountString);
    return amount;
}

function getTotalPrice(elementId) {
    const totalPrice = document.getElementById(elementId);
    const previousTotalString = totalPrice.innerText;
    const previousTotal = parseFloat(previousTotalString);
    return previousTotal;
}

function setTotalPrice(elementId, newValue) {
    const totalPrice = document.getElementById(elementId);
    newValueFinal = newValue.toFixed(2);
    const purchaseButton = document.getElementById('btn-purchase');
    if (newValueFinal > 0) 
    {
         purchaseButton.removeAttribute('disabled'); 
         purchaseButton.style.backgroundColor='#E527B2';
    }
    const applyButton = document.getElementById('btn-apply');
    if (newValueFinal >= 200) {
        applyButton.removeAttribute('disabled');
        total = newValueFinal;
        applyButton.style.backgroundColor='#E527B2';
    }
    totalPrice.innerText = newValueFinal;
}

function addToProductList(cardName) {
    console.log(cardName);
    const productList = document.getElementById('product-list');
    const count = productList.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-2');
    p.innerHTML = ` ${count + 1}. ${cardName}`;
    productList.appendChild(p);

}