var product = [
    {
        id: 1,
        title: 'Áo thun nam',
        image: '/img/meme1.jpg',
        price: 100,
        qty: 120000,
        thanhtien: '',
    }
];

//+
function decrease() {
    let priceInput = document.getElementById('price')
    let value = priceInput.value
    
    if (priceInput.value > 0) {
        priceInput.value = parseInt(value) - 1
    }
}

function increase() {
    let priceInput = document.getElementById('price')
    let value = priceInput.value
    
    priceInput.value = parseInt(value) + 1
}