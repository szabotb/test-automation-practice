const selectors = require('../../test_data/swag_labs/selectors')

let elements = {
    childInParentArray: [selectors.productsPage.products.description,
        selectors.productsPage.products.picture,
        selectors.productsPage.products.title,
        selectors.productsPage.products.price,
        selectors.productsPage.products.addToCartButton]
};

module.exports = elements