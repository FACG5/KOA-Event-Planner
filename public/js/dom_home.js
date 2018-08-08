
const btn = document.getElementById('btn');
const title = document.getElementById('title');
const text = document.getElementById('text');
const date = document.getElementById('date');
const time = document.getElementById('time');
const container = document.createElement("div");
results.appendChild(container);

function isEmpty(element){
    if (elementWithoutSpace(element).length > 0) {
        return false;
    }
    else {
        return true;
    }
}

function elementWithoutSpace(element){
    return element.value.trim();
}


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(isEmpty(title) || isEmpty(text) || !date.value || !time.value){
        alert("Please fill empty data");
    }else {
        const object = {
            "title" : elementWithoutSpace(title),
            "text" : elementWithoutSpace(text),
            "date" : elementWithoutSpace(date),
            "time" : elementWithoutSpace(time)
        };

        console.log(object);

        // fetch("POST", "/home", object, (err, respone) => {
        //     if (err)
        //         alert("There Is Error");
        //     else {
        //        console.log("asmaa");
        //     }
        // });


        container.setAttribute("class", "cont");

        const title2 = document.createElement("h2");
        container.appendChild(title2).setAttribute("class", "title2");
        title2.textContent = object.title;

        const text2 = document.createElement("p");
        container.appendChild(text2).setAttribute("class", "text");
        text2.textContent = object.text;


        const date2 = document.createElement("date");
        container.appendChild(date2).setAttribute("class", "title2");
        date2.textContent = object.date;


        const time2 = document.createElement("time");
        container.appendChild(time2).setAttribute("class", "title2");
        time2.textContent = object.time;


        }
    });



