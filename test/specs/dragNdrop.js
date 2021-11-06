import Main from "../pageObject/Main.page";
import DragAndDrop from "../pageObject/DragAndDrop.page";

const main = new Main();
const dnd = new DragAndDrop();

describe("Drag and Drop page", () => {
    //open the drag and drop page
    before( async () => {
        await main.load("./drag_and_drop");
    });
    //check the page is open
    it("should be displayed", async () => {
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/drag_and_drop");
    });

    it("should use custom drag and drop", async () => {
        //use custom command to drag and drop
        await browser.dragNdrop(dnd.columnA, dnd.columnB);
        await expect(columnAheader).toHaveText("B");
    })
})