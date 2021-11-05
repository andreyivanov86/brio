import Main from "../pageObject/Main.page";
const main = new Main();

describe("Drag and Drop page", () => {

    before( async () => {
        await main.load("./drag_and_drop");
    });

    it("should be displayed", async () => {
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/drag_and_drop");
    });

    it("should use custom drag and drop", async () => {
        await browser.dragNdrop();
    })

})