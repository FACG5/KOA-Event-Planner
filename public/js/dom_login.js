const user = document.getElementById("user");
const pass = document.getElementById("password");
const btn = document.getElementById("btn");
const h2 = document.getElementsByTagName("h2")[0];
const h3 = document.getElementsByTagName('h3')[0];
console.log(user, pass, btn);

//Sign up Button Action
h3.addEventListener('click', () => {
    fetch("get", "/sign_up", renderSginUpPage, null)
})

//Login Button Action
btn.addEventListener('click', (btn) => {
    fetch("post", "/login", renderHomePage, collectData());
})

//CollectData from field
function collectData() {
    return {
        user: user.value,
        pass: pass.value
    }
}
function renderSginUpPage(err, respone) {
    if (err)
        alert("There Is Error");
    else {
        window.location = respone.respon;
    }
}

function renderHomePage(err, respone) {
    if (err) {
        h2.setAttribute("style", "display:block");
    } else {
        window.location = respone.respone;
    }
}