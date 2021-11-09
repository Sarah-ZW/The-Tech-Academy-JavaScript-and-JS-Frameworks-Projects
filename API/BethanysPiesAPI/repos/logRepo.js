let fs = require('fs');

const FILE_NAME = './logs/log.txt';

let logRepo = {
    write: function (data, resolve, reject) {
        let toWRite = "*".repeat(80) + "\r\n";
        toWRite += "Date/Time: "  + new Date().toLocaleDateString() + "\r\n";
        toWRite += "Exception info: " + JSON.stringify(data) + "\r\n";
        toWRite += "*".repeat(80) + "\r\n";

        fs.writeFile(FILE_NAME, toWRite, function(err){
            if(err) {
                reject(err);
            }
            else {
                resolve(true);
            }
        });
    }
};

module.exports = logRepo;