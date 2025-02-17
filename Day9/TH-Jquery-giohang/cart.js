$(document).ready(function () {
    let cartItems = [
        {
            id: 1,
            name: "Meme 1",
            price: 320000,
            quantity: 1,
            image: "/img/meme1.jpg"
        },
        {
            id: 2,
            name: "Meme 2",
            price: 530000,
            quantity: 1,
            image: "/img/meme2.jpg"
        }
    ];

    function displayCart() {
        let cartList = $("#cart-list");
        cartList.empty();

        let totalAmount = 0;

        $.each(cartItems, function (index, item) {
            let total = item.price * item.quantity;
            totalAmount += total;

            let cartItemHTML = `
            <div class="cart-item-row d-flex justify-content-between border border-secondary rounded p-2 mb-3">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="" height="80px">
                </div>
                <div class="cart-item-info">
                    <h3 id="item-name">${item.name}</h3>
                    <p>Giá: <b id="item-price">${item.price}</b> VND</p>
                    <p>Số lượng: 
                        <button type="button" class="decrease btn btn-primary" data-index="${index}" style="height: 35px; width: 35px">-</button>
                        <input type="number" class="quantity" value="${item.quantity}" min="0" readonly style="width: 50px; text-align: center;">
                        <button type="button" class="increase btn btn-primary" data-index="${index}" style="height: 35px; width: 35px">+</button>
                    </p>
                    <p>Tổng tiền: <b class="item-total">${total}</b> VND</p>
                </div>
                <div class="cart-item-action">
                    <button class="remove btn btn-danger mt-2" data-index="${index}">Xóa</button>
                    <button class="btn btn-primary mt-2">Cập nhật</button>
                </div>
            </div>
            `;
            cartList.append(cartItemHTML);
        });

        $("#item-totalAll").text(totalAmount);

        let shippingFee = totalAmount > 10000000 ? 0 : 50000;
        $("#shipping-fee").text(shippingFee);

        let grandTotal = totalAmount + shippingFee;
        $("#total-price").text(grandTotal);
    }

    $(document).on("click", ".increase", function () {
        let index = $(this).data("index");
        if (cartItems[index].quantity < 99) {
            cartItems[index].quantity++;
            displayCart();
        }
    });

    $(document).on("click", ".decrease", function () {
        let index = $(this).data("index");
        if (cartItems[index].quantity > 0) {
            cartItems[index].quantity--;
            displayCart();
        }
    });

    $(document).on("click", ".remove", function () {
        let index = $(this).data("index");
        cartItems.splice(index, 1);
        displayCart();
    });

    displayCart();
});
