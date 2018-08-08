const btn = document.getElementById('btn');
const user = document.getElementById('user');
const pass = document.getElementById('password');
const display = document.getElementById('Display_name');

btn.addEventListener('click', () => {

    if (!(user.value && pass.value && display.value)) {
        alert("Please fill empty data");
    } else {
        const object = {
            "user_name": (user.value.trim()),
            "password": (pass.value.trim()),
            "display_name": (display.value.trim()),
        };

        fetch("POST", "/addUser", handlerResponse, object);
    }

});

function handlerResponse(err, response) {
    if (err)
        alert("There Is Error ");
    else {
        console.log(response);
        window.location = response;
    }
}