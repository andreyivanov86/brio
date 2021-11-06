import Main from "./Main.page";

class DragAndDrop extends Main {
    constructor() {
        super("./drag_and_drop");  
    }

    get dragAndDropHeader () {return $("h3") };
    get columnA () { return $("column-a") };
    get columnAheader () { return $("#column-a header") };
    get columnB () { return $("#column-b") };
    get columnBheader () { return $("#column-b header") };

}

export default DragAndDrop;