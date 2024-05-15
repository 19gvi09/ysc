import "yopta";
import fs from "node:fs";
import path from "node:path";

const compileFile = (inputFile, outputFile) => {
    fs.readFile(inputFile, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const translated = global.yopta(data, "ys")
        fs.writeFile(outputFile ? outputFile : path.format({ ...path.parse(inputFile), base: '', ext: '.js' }), translated, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.info("Success!");
        })
    })
}

export default {
    compileFile
}