import Upload from "../pageObject/Upload.page";

const upload = new Upload();

describe("Upload page", () => {
    before( async () => {
        await upload.load();
    });

    it("should be displayed", async () => {
        const elem1 = await $("=File Uploader");
        const elem2 = await $("#drag-drop-upload");
        await expect(elem1).toBeDisplayed();
        await expect(elem2).toBeDisplayed();
    });
})