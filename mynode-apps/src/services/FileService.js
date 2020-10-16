const fs = require('fs');
const path = require('path');


//path module will help to resolve platform independant file and accessiblity

//const filePath = './src/assets/info.txt';
const filePath = path.join(__dirname, '../assets/info.txt')
//const writeFilePath = './src/assets/info-copy.txt';
const writeFilePath =path.join(__dirname,'../assets/info-copy.txt')

const options = {
    encoding: 'utf-8'
};

class FileService {
    constructor() { }
    readFileV1(handler) {
        fs.readFile(filePath, options, (err, data) => {
            if (err) throw err;
            handler(data);
        });
    }
    readFileV2() {

        return new Promise((resolve, reject) => {

            fs.readFile(filePath, options, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data);
            });
        })

    }
    writeFile(data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(writeFilePath, data, options, err => {
                if (err) {
                    reject(err);
                }
                resolve('file has been written')
            });
        });
    }

}
module.exports = FileService;