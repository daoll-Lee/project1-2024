OPENAPI_KEY = ""
smodelmini = "gpt-4o-mini"
squestion = '황진이가 누구지?'

function talk() {
    data = {
        model: smodelmini,
        messages: [{
            role: "user",

            content: squestion
        }]
    }
    $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/chat/completions",
        Headers: {
            "Authorization": "Bearer " + OPENAPI_KEY
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done(function(response) {
        console.log(response)
        alert(response.choices[0].message.content)
    }).fail(function(error) {
        console.log(error)
            // alert(error.responseJSON.error.code)
        errormsg = error.status + ":" + error.responseJSON.error.code + "-" + error.responseJSON.error.message
        alert(errormsg)
    })
}
talk()