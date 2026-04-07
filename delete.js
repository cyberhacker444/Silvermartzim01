function deleteProduct(productId) {
    const product = document.getElementById(productId);
    if (confirm("Are you sure you want to delete this product?")) {
        product.remove();
        alert("Product deleted successfully!");
    }
}
