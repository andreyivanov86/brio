import Main from "../pageObject/Main.page";
import DynamicControls from "../pageObject/DynamicControls.page";

const main = new Main();
const dynamicControls = new DynamicControls();

describe("Dynamic Controls page", () => {

    before( async () => {
        await main.load("./dynamic_controls");
    });

    it("should be displayed", async () => {
        const checkBox = await $("#checkbox");
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/dynamic_controls");
        await expect(checkBox).toBeDisplayed();
    });

    it("should remove a checkbox", async () => {
        await dynamicControls.removeAddBtn.click();
        await dynamicControls.checkBox.waitForDisplayed({reverse: true});
        await expect(dynamicControls.checkBox).not.toBeDisplayed();
        await expect(dynamicControls.removedMessage).toHaveText("It's gone!");
    });

    it("should add a checkbox", async () => {
        await dynamicControls.removeAddBtn.click();
        await dynamicControls.checkBox.waitForDisplayed();
        await expect(dynamicControls.checkBox).toBeDisplayed();
        await expect(dynamicControls.removedMessage).toHaveText("It's back!");
    });

    it("should enable an imput", async () => {
        await dynamicControls.enableDisableBtn.click();
        await expect(dynamicControls.input).toHaveAttr("disabled");
        await expect(dynamicControls.disabledMessage).toHaveText("It's enabled!");
        await expect(dynamicControls.enableDisableBtn).toHaveText("Disable");
    });

    it("should enable an imput", async () => {
        await dynamicControls.enableDisableBtn.click();
        await expect(dynamicControls.input).not.toHaveAttr("disabled");
        await expect(dynamicControls.disabledMessage).toHaveText("It's disabled!");
        await expect(dynamicControls.enableDisableBtn).toHaveText("Enable");
    });
})