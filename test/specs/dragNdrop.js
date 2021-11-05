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
        const a = await $("#column-a");
        const columnAheader = await $("#column-a header")
        const b = await $("#column-b");
        await browser.dragNdrop(a, b);

        

        await expect(columnAheader).toHaveText("B");
        await browser.pause(3000);
    })

})