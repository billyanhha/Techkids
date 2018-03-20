const fs = require('fs');

let MyreadFileSync = (path) => {
    return JSON.parse(fs.readFileSync(path , 'utf-8' ));

}

let WriteFile = (path, writedata ,onWriteFileDone) => {
    fs.writeFile(path, JSON.stringify(writedata) ,  onWriteFileDone); 
}
module.exports = {
    MyreadFileSync , 
    WriteFile
}