const btn = document.getElementById('btn');
const user = document.getElementById('user');
const pass = document.getElementById('password');
const display = document.getElementById('Display_name');
const email = document.getElementById('Email');


function isEmpty(element){
    if (elementWithoutSpace(element).length > 0) {
        return false;
    }
    else {
        return true;
    }
}

function elementWithoutSpace(element){
    return element.value.replace(/\s/g, '');
}


btn.addEventListener('click',()=>{

    if(isEmpty(user) || isEmpty(pass) || isEmpty(display) || isEmpty(email)){
        alert("Please fill empty data");
    }else {
        const object = {
            "user_name" : elementWithoutSpace(user),
            "password" : elementWithoutSpace(pass),
            "display_name" : elementWithoutSpace(display),
            "email" : elementWithoutSpace(email)
        };

        fetch("POST", "/sign_up", object, (err, respone) => {
            if (err)
                alert("There Is Error");
            else {
                window.location = respone.respone;
            }
        });
    }
});