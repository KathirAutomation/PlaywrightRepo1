
import xlsx from "xlsx";
import Ajv, {Schema} from "ajv";

const path = require('path');


export default class ApiUtil {

    public schemavalidation(data:object) {
       const ajvlib = new Ajv();
       const valid = ajvlib.compile(data);
       if (!valid){
        console.log("AJV Validation Errors:", ajvlib.errorsText());
       }
       return valid;
    }

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

