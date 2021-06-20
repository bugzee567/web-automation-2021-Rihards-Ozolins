export class Page {
    constructor(browserName) {
        this.browserName = browserName
    }

    get browser() {
        if (this.browserName) {
            return browser[this.browserName]
        }
        return browser
    }
}