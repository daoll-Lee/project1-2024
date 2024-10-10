GOOGLEAPI_KEY = ""

function processFile(event) {
    content = event.target.result
    imagestring = content.replace('data:image/jpeg;base64,', '')
    document.getElementById("gimage").src = content
}

function uploadFiles(files) {
    file = files[0]
    reader = new FileReader()
    reader.onloadend = processFile
    reader.readAsDataURL(file)
}

function analyze() {
    squestion = txtMsg.value
    data = {
        requests: [{
            image: {
                content: imagestring
            },
            features: [{
                type: "FACE_DETECION",
                maxresult: 100
            }]
        }]
    }
    $.ajax({
        type: "POST",
        url: "https://vision.googleapis.com/v1/images:annotates" + "?keys=" + GOOGLEAPI_KEY,
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done(function(response) {
        console.log(response)
            // alert(response.choices[0].message.content)
        txtOut.value = response.choices[0].message.content
    }).fail(function(error) {
        console.log(error)
            // alert(error.responseJSON.error.code)
        errormsg = error.status + ":" + error.responseJSON.error.code + "-" + error.responseJSON.error.message
            // alert(errormsg)
        txtOut.value = errormsg
    })
}