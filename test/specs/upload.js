import Main from "../pageObject/Main.page";
import Upload from "../pageObject/Upload.page";
const path = require("path");

const main = new Main();
const upload = new Upload();

describe("Upload page", () => {
    //open upload page
    before( async () => {
        await main.load("./upload");
    });
    //verify the upload page is open 
    it("should be displayed", async () => {
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/upload");
    });
    //verify upload functionality
    it("should upload a file", async () => {
        //convert absolute file path to relative
        const pathToFile = path.resolve(path.basename(__dirname), "../test/fixtures/uploadFile.txt" )
        //use relative file path to upload the file
        const remoteFilePath = await browser.uploadFile(pathToFile);
        await upload.fileUploadBtn.setValue(remoteFilePath);
        await upload.fileSubmitBtn.click();
        await expect(upload.fileUploadHeader).toHaveText("File Uploaded!");
    });
})