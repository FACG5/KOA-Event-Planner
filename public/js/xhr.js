function fetch(requestType, url, callback, file) {

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4)
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);

                console.log(response);
                if (response.err)
                    callback(response.err);
                else
                    callback(null, response.result);

            }
    }

    xhr.open(requestType, url, true);
  
    xhr.send(JSON.stringify(file));
}