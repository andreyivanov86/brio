import Main from "../pageObject/Main.page";
import Upload from "../pageObject/Upload.page";
import DragAndDrop from "../pageObject/DragAndDrop.page";
import DynamicControls from "../pageObject/DynamicControls.page";

// initate Page Objects
const main = new Main();
const upload = new Upload();
const dragAndDrop = new DragAndDrop();
const dynamicControls = new DynamicControls();

describe("Page", () => {

    //land on the main page before every "it" statement
    beforeEach(async () => {
        await main.load("./");
    }); 

    it("should navigate", async ()=> {
        //Basic checks for the page
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/");
        await expect(main.header).toHaveText("Welcome to the-internet");
    });
    // test the navigation to file upload page
    it("should navigate to file upload", async () => {
        await main.fileUploadLink.click()
        await expect(upload.fileUploadHeader).toHaveText("File Uploader");
    });
    // test the navigation to file drag and drop page
    it("should navigate to drag and drop", async () => {
        await main.dragAndDropLink.click()
        await expect(dragAndDrop.dragAndDropHeader).toHaveText("Drag and Drop");
    });
    // test the navigation to dynamic controls page
    it("should navigate to Dynamic Controls", async () => {
        await main.dynamicControlsLink.click()
        await expect(dynamicControls.dynamicControlsHeader).toHaveText("Dynamic Controls");
    });

});