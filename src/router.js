const { handlerHomePage, handlerOtherFiles, handlerLogin, handlerOtherHTMLFiles, otherPages, handleraddUser, handlerSignUp, handlerSignUpBtn } = require('./handler');

function router(request, respone) {
    const endpoint = request.url;

    //console.log(endpoint);

    if (endpoint === '/') {
        handlerHomePage(request, respone);
    } else if (endpoint.includes('public')) {
        handlerOtherFiles(request, respone);
    } else if (endpoint === '/login') {
        handlerLogin(request, respone);
    } else if (endpoint === '/home') {
        handlerOtherHTMLFiles(request, respone);
    } else if (endpoint === '/sign_up') {
        handlerSignUp(request, respone);
    } else if (endpoint === '/addUser' && request.method === 'POST') {
        handleraddUser(request, respone);
    } else {
        otherPages(request, respone);
    }

}
module.exports = router;