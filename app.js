
const nombre=document.getElementById("name")
const email=document.getElementById("email")
const pass=document.getElementById("password")
const form=document.getElementById("form")
const parrafo=document.getElementById("warnings")

function re()
{
    location.href="index.html"
}
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings=""
    let entrar=false
    let a
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML=""
    if(nombre.value=="saul" || "SAUL" || "Saul")
    {
       
    }
    else{
        warnings += 'El nombre no es valido <br>' 
        entrar=true
    }
    if(!regexEmail.test(email.value))
    {
        warnings += 'El email no es valido <br>'
        entrar=true
    }
    if(pass.value==1258)
    {
       
    }
    else{
        warnings += 'La contraseña no es valida <br>'
        entrar=true
    }

    if(entrar)
    {
        parrafo.innerHTML=warnings
    }
    else{  
        parrafo.innerHTML="Enviado"
        location.href="inicio.html"
    }
})