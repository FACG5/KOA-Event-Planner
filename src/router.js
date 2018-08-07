const { handlerHomePage, handlerOtherFiles, handlerLogin, handlerOtherHTMLFiles, otherPages,handlerSignUpPage } = require('./funcation');

function router(request, respone) {
    const endpoint = request.url;
    console.log('new fucking request');
    if (endpoint === '/') {
        handlerHomePage(request, respone);
    } else if (endpoint.includes('public')) {
        handlerOtherFiles(request, respone);
    } else if (endpoint === '/login') {
        handlerLogin(request, respone);
    } else if (endpoint === '/home') {
        handlerOtherHTMLFiles(request, respone);
    } else if (endpoint === 'sign_up') {
        //handlerSignUpPage(request, respone);
    } else {
        otherPages(request, respone);
    }

}
module.exports = router;