const doc       = document
const url_login = 'http://localhost:3002/app/login'

$('#login').click(function(){
    const email     = doc.getElementById('email').value
    const pass      = doc.getElementById('pass').value

    const data   = { email, pass }
    const config = {
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }

    fetch(url_login, config)
        .then(response=>{
            if(response.ok){
                onSuccess(response.text())
                doc.location.href = 'http://localhost:3003/app/home'
            }else{
                onError(response.text())
            }
        })
        .then(response => {
            response
        })
        .catch(err     => alert(err))

    })


    function onSuccess(response) {
        response.then(body => {
            let json    = JSON.parse(body)
            let id_user = localStorage.setItem('id_user',json.id_user)
            let auth    = localStorage.setItem('auth',json.auth)
            let token   = localStorage.setItem('_token',json._token)
        }) 
    }

    function onError(error) {
        error.then(body =>{
            alert(body)
        }) 
    }