
import xlsx from "xlsx";
const path = require('path');


export default class ApiUtil {

    loadPayloadJson(filename: string): any {
        try{
            return JSON.parse(JSON.stringify(require(path.resolve("./Payload", filename))));
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }

    }
}
}