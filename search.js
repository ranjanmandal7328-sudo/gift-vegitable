function searchProduct() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();

    const products = document.querySelectorAll(".product-card-shadow");

    let found = false;

    products.forEach(product => {
        const name = product.querySelector("h4").textContent.toLowerCase();

        if (name.includes(input)) {
            product.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            product.style.outline = "3px solid green";

            setTimeout(() => {
                product.style.outline = "";
            }, 2000);

            found = true;
        }
    });

    if (!found && input !== "") {
        alert("Product not found!");
    }
}