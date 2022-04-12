const doc       = document
const url_login = 'https://anotation-api.herokuapp.com/app/login'

doc.onload = addEventListener('load',()=>{
    $('#error-message').hide()
})

$('#login').click(function(){
    const email     = doc.getElementById('email').value
    const pass      = doc.getElementById('pass').value

    const Head = new Headers()
    Head.append('Origin','https://anotation-app.herokuapp.com')

    const data   = { email, pass }
    const config = {
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json',
             Head
        }
    }

    fetch(url_login, config)
        .then(response=>{
            if(response.ok){
                onSuccess(response.text())
            }else{
                onError(response.text())
            }
        })
        .then(response => {
            response
        })
        .catch(err     => alert(err))

        $('#error-message').empty() 
    })


    function onSuccess(response) {
        response.then(body => {  
            let json    = JSON.parse(body)
            localStorage.setItem('id_user',json.id_user)
            localStorage.setItem('auth',json.auth)
            localStorage.setItem('_token',json._token)
        }) 

        isLogged()
    }

    function isLogged() {
        let id_user = localStorage.getItem('id_user')
        let id = JSON.parse(id_user)
        doc.location.href = `https://anotation-app.herokuapp.com/app/users/${id}`
    }

    function onError(error) {
        error.then(body =>{
            $('#error-message').append(body)
            $('#error-message').show(100).fadeOut(5000)
    }) 
    
}