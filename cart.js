// // // document.querySelectorAll(".add-cart-btn").forEach(button => {
// // //     button.addEventListener("click", function () {

// // //         // Add product to localStorage here
// // //         // ...

// // //         // Redirect to cart page
// // //         window.location.href = "cart.html";
// // //     });
// // // });document.querySelectorAll(".add-cart-btn").forEach(button => {

// // // 
// document.addEventListener("DOMContentLoaded", () => {

//     // Product page
//     const buttons = document.querySelectorAll(".add-cart-btn");

//     if (buttons.length > 0) {

//         buttons.forEach(button => {

//             button.addEventListener("click", function () {

//                 let cart = JSON.parse(localStorage.getItem("cart")) || [];

//                 const product = {
//                     name: this.dataset.name,
//                     price: this.dataset.price,
//                     image: this.dataset.image,
//                     quantity: 1
//                 };

//                 cart.push(product);

//                 localStorage.setItem("cart", JSON.stringify(cart));

//                 window.location.href = "cart.html";
//             });

//         });

//     }

//     // Cart page
//     const cartItems = document.getElementById("cartItems");

//     if (cartItems) {

//         let cart = JSON.parse(localStorage.getItem("cart")) || [];

//         cartItems.innerHTML = "";

//         cart.forEach(item => {

//             cartItems.innerHTML += `
//             <div class="flex items-center gap-6 border-b p-4">

//                 <img src="${item.image}" class="w-24 h-24 object-cover rounded">

//                 <div>
//                     <h2 class="font-bold">${item.name}</h2>
//                     <p>₹${item.price}</p>
//                     <p>Qty : ${item.quantity}</p>
//                 </div>

//             </div>
//             `;

//         });

//     }

// });
document.addEventListener("DOMContentLoaded", () => {

    // ------------------ ADD TO CART ------------------
    document.addEventListener("click", event => {
        const button = event.target.closest(".add-cart-btn");
        if (!button) return;

                let cart = JSON.parse(localStorage.getItem("cart")) || [];

                const product = {
                    name: button.dataset.name,
                    price: Number(button.dataset.price),
                    image: button.dataset.image,
                    quantity: 1
                };

                // Check if product already exists
                const existing = cart.find(item => item.name === product.name);

                if (existing) {
                    existing.quantity++;
                } else {
                    cart.push(product);
                }

                localStorage.setItem("cart", JSON.stringify(cart));

                window.location.href = "Cart.html";
    });

    displayCart();

});


// ---------------- DISPLAY CART ----------------

function displayCart() {

    const cartItems = document.getElementById("cartItems");

    if (!cartItems) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<h2 class='text-center text-2xl font-bold'>Your Cart is Empty</h2>";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `
        <div class="flex items-center justify-between  border-b p-4 rounded-lg">

            <div class="flex items-center gap-4">

                <img src="${item.image}" class="w-24 h-24 rounded object-cover">

                <div>
                    <h2 class="font-bold text-xl">${item.name}</h2>

                    <p>₹${item.price}</p>

                    <div class="flex gap-2 mt-2">

                        <button onclick="decreaseQty(${index})"
                        class="bg-red-500 text-white px-3 rounded">-</button>

                        <span>${item.quantity}</span>

                        <button onclick="increaseQty(${index})"
                        class="bg-green-600 text-white px-3 rounded">+</button>

                    </div>

                </div>

            </div>

            <div>

                <button onclick="removeItem(${index})"
                class="bg-red-500 text-white px-3 py-1 rounded">
                Remove
                </button>

            </div>

        </div>
        `;

    });

    cartItems.innerHTML += `
    <div class="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-surface-container-highest">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
                <p class="text-on-surface-variant">Total amount for ${cart.length} item(s)</p>
                <p class="text-3xl font-bold">₹${total}</p>
            </div>
            <a href="payment.html" class="inline-flex items-center justify-center bg-primary text-on-primary px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/20 hover:bg-primary-fixed transition-all">
                Proceed to Payment
            </a>
        </div>
    </div>
    `;
}


// ---------------- INCREASE ----------------

function increaseQty(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity++;

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}


// ---------------- DECREASE ----------------

function decreaseQty(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart[index].quantity>1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}


// ---------------- REMOVE ----------------

function removeItem(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}
