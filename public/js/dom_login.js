const user = document.getElementById("user");
const pass = document.getElementById("password");
const btn = document.getElementById("btn");
const h2 = document.getElementsByTagName("h2")[0];
const h3 = document.getElementsByTagName('h3')[0];

//Sign up Button Action
h3.addEventListener('click', () => {
    window.location = '/sign_up';

})

//Login Button Action

btn.addEventListener('click', (btn) => {
    if (!((user.value).trim() && (pass.value).trim())) {
        alert("Please fill empty data");
    } else {
        fetch("POST", 'login', renderHomePage, collectData());
    }
})

//CollectData from field
function collectData() {

    return {
        user: user.value,
        pass: pass.value
    }

}

function renderSginUpPage(err, respone) {
    if (err) {
        h2.textContent = err;
        h2.setAttribute("style", "display:block");
    } else {
        window.location = response;
    }
}

function renderHomePage(err, response) {
    if (err) {
        h2.textContent = err;
        h2.setAttribute("style", "display:block");

    } else {
        window.location = response;
    }
}
