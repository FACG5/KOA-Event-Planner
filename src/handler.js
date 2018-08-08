const fs = require('fs');
const path = require('path');
const getData = require('./getData');

let loginStatus = false;
let user_id = null;

function handlerHomePage(request, response) {

    fs.readFile(path.join(__dirname, '..', 'public', 'sign_in.html'), (err, file) => {
        if (err) {
            console.log(err);
        } else {
            response.writeHead(200, { "content-type": "text/html" });
            response.end(file);
        }
    });

}

function handlerOtherFiles(request, response) {
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
            response.writeHead(200, { "content-type": contentType[extension] });
            response.end(file);
        }
    })
}



function handlerLogin(request, response) {

    let allData = '';
    request.on('data', (chunck) => {
        allData += chunck;

    });
    request.on('end', () => {

        const user_info = JSON.parse(allData);
        getData.searchUser(user_info.user, user_info.pass, (err, result) => {
            result = JSON.parse(result);
            if (err) {
                response.writeHead(200, { "content-type": "applcation/javascript" });

                response.end(JSON.stringify({ err: "There is error in DB" }));

            } else {
                if (result.length === 0) {
                    response.writeHead(200, { "content-type": "applcation/javascript" });

                    response.end(JSON.stringify({ err: "Check Your Fields Please" }));
                } else {
                    loginStatus = true;
                    response.writeHead(200, { "content-type": "applcation/javascript" });
                    response.end(JSON.stringify({ result: '/home' }));
                }
            }

        });


    });
}

function handlerSignUpPage(request, response) {
    let data = '';
    request.on('data', function (chunk) {
        data += chunk;
    });
    request.on('end', () => {

        const Data = (JSON.parse(data));
        const userName = Data.user_name;
        const passward = Data.password;
        const displayName = Data.display_name;
        const email = Data.email;



        addUser(userName, passward, displayName, (err, res) => {
            if (err) {
                response.writeHead(500, 'Content-Type:text/html');
                response.end('<h1>Sorry, there was a problem adding that user</h1>');
                console.log(err)
            }

        });
    })
};

function handlerOtherHTMLFiles(request, response) {

    if (loginStatus) {
        response.writeHead(200, { "content-type": "text/html" });
        fs.readFile(path.join(__dirname, '..', 'public', 'home.html'), (err, file) => {
            if (err)
                console.log(err);
            else {
                response.end(file);
            }
        });
    } else {
        response.writeHead(302, { "Location": "/" });
        response.end();
    }
}

function otherPages(request, response) {
    loginStatus = false;
    response.writeHead(302, { 'Location': '/' });
    response.end();
}
function handlerSignUp(request, response) {
    fs.readFile(path.join(__dirname, '..', 'public', 'sign_up.html'), (err, file) => {
        if (err) {
            console.log(err.message);
        } else {
            response.writeHead(200, { "content-type": "text/html" });
            response.end(file);
        }

    })
}


function handleraddUser(request, response) {
    let allData2 = '';

    request.on('data', (chunck) => {
        allData2 += chunck;
    })

    request.on('end', () => {
        const jsonfile = JSON.parse(allData2);
        getData.addUser(jsonfile.user_name, jsonfile.password, jsonfile.display_name, (err, result) => {
            if (err) {
                response.writeHead(200, { "content-type": "application/javascript" });
                response.end(JSON.stringify({ "err": err.message }));
            } else {
                response.writeHead(200, { "content-type": "application/javascript" });
                response.end(JSON.stringify({ result: '/home' }));
            }
        });
    });
}
module.exports = { handlerHomePage, handlerOtherFiles, handlerLogin, handlerOtherHTMLFiles, otherPages, handlerSignUp, handleraddUser };