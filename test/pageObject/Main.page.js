class Main {
    constructor(path) {
        this.path = path;
    }

    get header() { return $("h1=Welcome to the-internet") };
    get fileUploadLink() { return $("a=File Upload") };
    get dragAndDropLink() { return $("a=Drag and Drop") };
    get dynamicControlsLink() { return $("a=Dynamic Controls") };

    async load() {
        await browser.url("./");
    }
}

export default Main;