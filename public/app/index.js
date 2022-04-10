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

    let url = `http://localhost:3002/app/users/data/${id_user}`

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
                let idDB       = e.id_user
                let usernameDb = e.username
                let emailDB    = e.email
                
                let id_user         = doc.getElementById('id_user')
                let username        = doc.getElementById('username')
                let email           = doc.getElementById('email')

                factoryHeader(idDB,id_user,'Id:  ')
                factoryHeader(usernameDb,username, 'Username:  ')
                factoryHeader(emailDB,email,'Email:  ')
            })
        })
        .catch(err => console.log(err))
}
$('#insert').click(function(){
    let title     = doc.querySelector('[anotation-title]').value
    let anotation = doc.querySelector('[anotation-anotation]').value

    let id_user = localStorage.getItem('id_user')
    let _token  = localStorage.getItem('_token')

    let url = `http://localhost:3002/app/users/data/${id_user}`

    data = {    title, anotation   }

    let config = new Request(url,{ 
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'X-Access-Token':`${_token}`
        },
        body:JSON.stringify(data)
    })

    fetch(config)
        .then(response => response.json())
        .catch(err     => console.log(err))
})
function factoryHeader(elDb,elHtml,description){
    let created         = doc.createElement('p')
    created             = description
    elHtml.innerHTML    = created + elDb
}
function factoryCard(){
    return []
}