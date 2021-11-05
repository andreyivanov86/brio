import Main from "./Main.page";

class DynamicControls extends Main {
    constructor() {
        super("./drag_and_drop");  
    }

    get dynamicControlsHeader () { return $("h4") };
    get checkBox () { return $("#checkbox") };
    get removeAddBtn () { return $("[onclick='swapCheckbox()']") };
    get removedMessage () { return $("#checkbox-example #message") };
    get input () { return $("#input-example input") };
    get enableDisableBtn () { return $("[onclick='swapInput()']") };
    get disabledMessage () { return $("#input-example #message") };
    
}

export default DynamicControls;