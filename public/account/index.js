const doc = document
const url_create_account = 'http://localhost:3002/app/create-account'

doc.onload = addEventListener('load',()=>{
    $('#error-message').hide()
    $('#success-message').hide()
})


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
                onSuccess(response.text())
            }else{
                onError(response.text())
            }
        })
        .then(response => {
            response
            clear()
        })
        .catch(err     => alert(err))

        $('#error-message').empty() 
        $('#success-message').empty() 
    })

    function onSuccess(response) {
        response.then(body => {
            $('#success-message').append(body)
            $('#success-message').show(100).fadeOut(5000)
        }) 
    }

    function onError(error) {
        error.then(body =>{
            $('#error-message').append(body)
            $('#error-message').show(100).fadeOut(5000)
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
