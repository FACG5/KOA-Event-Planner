const fs = require('fs');
const path = require('path');

let loginStatus = false;


function handlerHomePage(request, respone) {

    console.log(1, loginStatus)
    fs.readFile(path.join(__dirname, '..', 'public', 'sign_in.html'), (err, file) => {
        if (err) {
            console.log(err);
        } else {
            respone.writeHead(200, { "content-type": "text/html" });
            respone.end(file);
        }
    });

}

function handlerOtherFiles(request, respone) {
    console.log(2, loginStatus)
    const extension = request.url.split('.')[1];
    const contentType = {
        "html": "text/html",
        "css": "text/css",
        "js": "applcation/javascript",
        "ico": "image/icon"
    }
    fs.readFile(path.join(__dirname, "..", request.url), (err, file) => {
        if (err)
            console.log(err);
        else {
            respone.writeHead(200, { "content-type": contentType[extension] });
            respone.end(file);
        }
    })
}
function handlerLogin(request, respone) {
    console.log(3, loginStatus)
    readJSONFile((jsonfile) => {
        let allData = '';
        request.on('data', (chunck) => {
            allData += chunck;

        });
        request.on('end', () => {
            allData = JSON.parse(allData);
            for (let i = 0; i < jsonfile.length; i++) {
                if (jsonfile[i].user === allData.user && jsonfile[i].pass === allData.pass) {
                    loginStatus = true;
                    break;
                } else {
                    loginStatus = false;
                }
            }
            if (loginStatus) {
                respone.writeHead(200, { "content-type": "application/javascript" });
                respone.end(JSON.stringify({ respone: '/home' }));
            } else {
                respone.end(JSON.stringify({ err: new TypeError("Please") }));
            }
        });
    })


}
function readJSONFile(cb) {
    console.log(4, loginStatus)

    console.log(__dirname);
    fs.readFile(__dirname+'/users.json', (err, file) => {
        if (err)
            console.log(err);
        else {
            cb(JSON.parse(file).users);
        }
    })
}
function handlerOtherHTMLFiles(request, respone) {
    console.log(5, loginStatus)
    if (loginStatus) {
        respone.writeHead(200, { "content-type": "text/html" });
        fs.readFile(path.join(__dirname, '..', 'public', 'home.html'), (err, file) => {
            if (err)
                console.log(err);
            else {
                respone.end(file);
            }
        })
    } else {
        respone.writeHead(302, { "Location": "/" });
        respone.end();

    }
}

function otherPages(request, respone) {

    loginStatus = false;
    respone.writeHead(302, { 'Location': '/' });
    respone.end();

}
module.exports = { handlerHomePage, handlerOtherFiles, handlerLogin, handlerOtherHTMLFiles, otherPages };