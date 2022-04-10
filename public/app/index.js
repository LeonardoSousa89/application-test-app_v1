const doc = document

doc.onload = addEventListener('load',()=>{
    let auth    = localStorage.getItem('auth')
    let id_user = localStorage.getItem('id_user')
    let _token  = localStorage.getItem('_token')

    if(!auth && !id_user && !_token) {
        doc.location.href = 'http://localhost:3003/app/login'
    }
    else{
        getToken()
    }
})
$('#out').click(function(){
    doc.location.href = 'http://localhost:3003/app/login'

    localStorage.removeItem('auth')
    localStorage.removeItem('id_user')
    localStorage.removeItem('_token')   
})
function getToken(){
    let id_user = localStorage.getItem('id_user')
    let _token  = localStorage.getItem('_token')

    let url = `http://localhost:3002/app/users/${id_user}`

    let config = new Request(url,{ 
        method:'GET',
        mode:'cors',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'X-Access-Token':`${_token}`
        }
})
    fetch(config)
        .then(response => response.json())
        .then(response =>{  
            response.map(e=>{
                let usernameDb = e.username
                let emailDB    = e.email

                let username        = doc.getElementById('username')
                username.innerHTML  = usernameDb
                let email           = doc.getElementById('email')
                email.innerHTML     = emailDB
            })
        })
        .catch(err => console.log(err))
}

