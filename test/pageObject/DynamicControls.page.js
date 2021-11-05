import Main from "./Main.page";

class DynamicControls extends Main {
    constructor() {
        super("./drag_and_drop");  
    }

    get dynamicControlsHeader () { return $("h4") };

}

export default DynamicControls;