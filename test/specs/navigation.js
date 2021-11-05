import Main from "../pageObject/Main.page";
import Upload from "../pageObject/Upload.page";
import DragAndDrop from "../pageObject/DragAndDrop.page";
import DynamicControls from "../pageObject/DynamicControls.page";

const main = new Main();
const upload = new Upload();
const dragAndDrop = new DragAndDrop();
const dynamicControls = new DynamicControls();

describe("Page", () => {

    beforeEach(async () => {
        await main.load();
    }); 

    it("should navigate", async ()=> {
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/");
        await expect(main.header).toHaveText("Welcome to the-internet");
    });

    it("should navigate to file upload", async () => {
        await main.fileUploadLink.click()
        await expect(upload.fileUploadHeader).toHaveText("File Uploader");
    });

    it("should navigate to drag and drop", async () => {
        await main.dragAndDropLink.click()
        await expect(dragAndDrop.dragAndDropHeader).toHaveText("Drag and Drop");
    });

    it("should navigate to Dynamic Controls", async () => {
        await main.dynamicControlsLink.click()
        await expect(dynamicControls.dynamicControlsHeader).toHaveText("Dynamic Controls");
    });


});