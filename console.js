/*
1-Form seçimi
2-Input Bilgisini UL içerisine ekle
3-Form içindeki bilgiyi sıfırla
4-Eğer forma bilgi girilmez ise kullanıcıyı uyar
5-Passwor'ler aynı değilse uyarı versin.(uyarıyı yana versin)
*/

let userFormDOM = document.querySelector('#userForm')
//submit edildiğinde formHAndler fonksiyonu çağırılsın.
userFormDOM.addEventListener('submit',formHandler)
let alertDOM = document.querySelector('#alert')


/*----------------ALERT FUNCTION---------------------*/
const alertFunction = (tittle, message, className= "warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${tittle}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`



/*----------------formHandler FUNCTION---------------------*/
function formHandler(event){
    event.preventDefault();
    const NAME = document.querySelector('#name')
    const SURNAME = document.querySelector('#surname')
    const EMAIL = document.querySelector('#email')
    const PASSWORD = document.querySelector('#password')
    const APPROVE = document.querySelector('#approve')
    
 
    //name,surname,email,password ve approve değeri varsa çalışsın istiyorum.
    if(NAME.value && SURNAME.value && EMAIL.value && PASSWORD.value && APPROVE.value){
        
        //fonksiyonu çağırıyorum.
        addItem(NAME.value,SURNAME.value,EMAIL.value)
        if(passwordControl(true)){
            passwordControl(PASSWORD.value, APPROVE.value)

        }
        
        //göderdikten sonra sıfırladık.
        NAME.value = ""
        SURNAME.value = ""
        EMAIL.value = ""
        PASSWORD.value = ""
        APPROVE.value = ""

    }else{
        alertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Eksik Bilgi Girdiniz!!",
            "danger")
    }
}

/*----------------passwordControl FUNCTION---------------------*/
function passwordControl(password,approve){  

    let PASSWORD = document.querySelector('#password')
    let APPROVE = document.querySelector('#approve')

    passwordControl8(false)
    if(PASSWORD.value && APPROVE.value){ //Şifre girildiyse
        if(PASSWORD.value != APPROVE.value){ // ve aynı değilse
            alertDOM.innerHTML = alertFunction(
                "PASSWORDS MUST SAME"
            )
        }else if(PASSWORD.value.length < 8){ 
            alertDOM.innerHTML = alertFunction(
                "Password must be 8 characters or greater.'"
            )
        }else if(PASSWORD.value.search(/[a-z]/) < 0){
            alertDOM.innerHTML = alertFunction(
                "Şifre en az bir Küçük harf içermelidir.'"
            )
        }
        else if(PASSWORD.value.search(/[A-Z]/) < 0){
            alertDOM.innerHTML = alertFunction(
                "Şifre en az bir büyük harf içermelidir.'"
            )
        }
        else if(PASSWORD.value.search(/[0-9]/) < 0){
            alertDOM.innerHTML = alertFunction(
                "Şifre en az bir rakam içermelidir.'"
            )
        }
    }
}

let userListDOM = document.querySelector('#userList')

/*<li class="list-group-item d-flex justify-content-between align-items-center">
A list item
<span class="badge bg-primary rounded-pill">14</span> </li> */

//bilgilerin ekleneceği fonksiyon. Bunu list e ekliyoruz.
const addItem = (name,surname) => {
    let liDOM = document.createElement('li')
    //lidom un innerHTML ine bu bilgileri eklemek istiyorum.
    liDOM.innerHTML = `${name} ${surname}`

    //class ile birlikte özellikleri ekliyorum.
    liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    userListDOM.append(liDOM)
   
} 