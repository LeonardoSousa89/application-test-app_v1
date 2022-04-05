const doc = document
const url_create_account = 'http://localhost:3002/app/create-account'

$('#signup').click(function(){
    const username  = doc.getElementById('username').value
    const email     = doc.getElementById('email').value
    const pass      = doc.getElementById('pass').value

    const data   = { username, email, pass }
    const config = {
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }

    fetch(url_create_account, config)
        .then(response=>{
            if(response.ok){
                onSuccess(response.json())
            }else{
                onError(response.text())
            }
        })
        .then(response => {
            response
            clear()
        })
        .catch(err     => alert(err))

    })


    function onSuccess(response) {
        response.then(body => body) 
    }

    function onError(error) {
        error.then(body =>{
            alert(body)
        }) 
    }

    function clear() {
        let username  = doc.getElementById('username')
        let email     = doc.getElementById('email')
        let pass      = doc.getElementById('pass')

        username.value  = ''
        email.value     = ''
        pass.value      = ''
    }