function fetch(requestType, url, callback, file) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4)
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                const respone = JSON.parse(xhr.responseText);
                if (respone.err)
                    callback(respone.err);
                else
                    callback(null, respone);
            }
    }
    xhr.open(requestType, url, true);
    xhr.send(JSON.stringify(file));
}