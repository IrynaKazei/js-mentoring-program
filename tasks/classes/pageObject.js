/**
 * Organize a page object structure of any app you want:
 * 1. Base page should be created
 * 2. At least one of the child pages should be inherited from the page
 * 3. Create a simple walk through scenarios using the described elements (how it was done on the sessions for Login functionality)
 */

class Page {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    viewBaseUrl() {
        return `My base URL = ${this.baseUrl}`;
    }
}

class CheckoutPage extends Page {
    constructor(baseUrl, path) {
        super(baseUrl);
        this.path = path;
    }

    open() {
        return `I have navigated to ${this.baseUrl}&{this.path}`;
    }

    get cardField() {
        return "Card number Field";
    }
    get holderField() {
        return 'Cardholder Field';
    }
    get cvvField() {
        return " CVV Field";
    }
    get expiryDateField(){
        return 'Expiry date field';
    }
    get payButton(){
        return 'Review and Pay button';
    }
    typeCard(text) {
        return `I have just typed ${text} into ${this.cardField}`;
    }
    typeHolder(text){
        return `I have just typed ${text} into ${this.holderField}`;
    }
    typeCvv(text){
        return `I have just typed ${text} into ${this.cvvField}`;
    }
    typeExpiryDate(text){
        return `I have just typed ${text} into ${this.expiryDateField}`;
    }
    clickPay() {
        return `I have just clicked ${this.payButton}`;
    }
}

const checkoutPage = new CheckoutPage('www.onliner.by', '/checkout');
console.log (checkoutPage);
console.log(checkoutPage.viewBaseUrl());
console.log(checkoutPage.open());
console.log(checkoutPage.typeCard(223334554));
console.log(checkoutPage.typeCvv(555));
console.log(checkoutPage.typeHolder('Iryna Kazei'));
console.log(checkoutPage.typeExpiryDate('07/20/2020'));
console.log(checkoutPage.clickPay());