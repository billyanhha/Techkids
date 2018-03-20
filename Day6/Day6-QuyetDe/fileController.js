const fs = require('fs');

let myReadFile = (path)=>{
    return JSON.parse(fs.readFileSync(path , 'utf-8'))
};

let myWriteFile = (path , data , onWriteFileDone) =>{
    fs.writeFileSync(path , JSON.stringify(data) , onWriteFileDone);
};  

module.exports = {
    myReadFile , 
    myWriteFile
}