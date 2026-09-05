// const deleteButtons = document.querySelectorAll(".delete-btn");

// deleteButtons.forEach(button => {
//     button.addEventListener("click", function () {

//         // Delete the complete cart item
//         this.closest(".cart-item-border").remove();

//     });
// });<script>

let qty = 1;
const unitPrice = 40;

const qtyText = document.getElementById("qty");
const priceText = document.getElementById("price");

document.getElementById("plus").onclick = function () {

    qty++;

    qtyText.innerText = qty;
    priceText.innerText = "₹" + (qty * unitPrice);

};

document.getElementById("minus").onclick = function () {

    if (qty > 1) {

        qty--;

        qtyText.innerText = qty;
        priceText.innerText = "₹" + (qty * unitPrice);

    }

};

document.getElementById("remove").onclick = function () {

    document.querySelector(".product-card-shadow").remove();

};
