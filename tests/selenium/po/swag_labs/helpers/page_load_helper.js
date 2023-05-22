class Helpers {
   async pageLoaded (page) {
        let necessaryElements = await page.elementsLoaded();
        necessaryElements = await Promise.all(necessaryElements.map(async (element) => await element.isDisplayed()))

        let isAllVisible = necessaryElements.every((value) => value === true);
        return isAllVisible
    }
}

module.exports = new Helpers()