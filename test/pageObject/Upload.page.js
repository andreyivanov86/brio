import Main from "./Main.page";

class Upload extends Main {
    constructor() {
        super("./upload");  
    }

    get fileUploadHeader () {return $("h3")};

}

export default Upload;