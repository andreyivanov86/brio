import Main from "./Main.page";

class DragAndDrop extends Main {
    constructor() {
        super("./drag_and_drop");  
    }

    get dragAndDropHeader () {return $("h3")};

}

export default DragAndDrop;