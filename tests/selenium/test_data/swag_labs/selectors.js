let selectors = {
    homePage: {
        usernameField: "input[data-test='username']",
        passwordField: "input[data-test='password']",
        submitButton: "input[data-test='login-button']"
    },
    webshopPage: {
        header: {
            main: "[class='header_label']",
            hamburgerButton: "[class='bm-burger-button']",
            shoppingCart: "[class='shopping_cart_link']",
        },
        sortingOptions: "[class='product_sort_container']",
        products: {
            items: "[class='inventory_item']",
            title: "[class='inventory_item_name']",
            description: "[class='inventory_item_desc']",
            picture: "img[class='inventory_item_img']",
            price: "[class='inventory_item_price']",
            addToCartButton: "[data-test*='add-to-cart']"
        }

    },
    productPage: {
        title: "[class='inventory_details_name large_size']",
        description: "[class='inventory_details_desc large_size']",
        picture: "[class='inventory_details_img']",
        price: "[class='inventory_details_price']",
        addToCartButton: "[data-test*='add-to-cart']"
    }
};

module.exports = selectors;