import Main from "./Main.page";
const path = require("path");

class Upload extends Main {
    constructor() {
        super();  
    }

    get fileUploadHeader () { return $("h3") };
    get fileUploadBtn () { return $('#file-upload') };
    get fileSubmitBtn () { return $('#file-submit') };
}

export default Upload;