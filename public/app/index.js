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
    let _token  = JSON.parse(localStorage.getItem('_token'))

    let url = `http://localhost:3002/app/users/${id_user}`
    console.log(url)

    let x_access_token = new Headers()
    x_access_token.append('Authentication', `Bearer ${_token}` )

    let config = new Request(url,{ 
            method:'GET',
            mode:'cors',
            headers:x_access_token
         
    })

    fetch(config)
        .then(response => response.json())
        .then(response =>{  
            console.log(response)
        })
        .catch(err     => console.log(err))
}
