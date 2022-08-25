const formulario = document.getElementById('formulario')

const dbUser = 'Chuy'
const dbPassword = '1234abc'

const crear = (user) => {
  let span = document.createElement('span')
  span.classList.add('lista')
  span.innerHTML = ` 
  Bienvenido ${user}

  `
  let render= document.getElementById('render')
  render.appendChild(span)
}

//` ` 
function  errores(tipo){
  let error = document.getElementById(`error${tipo}`)
  error.classList.remove('hide')
  error.classList.add('error')
  setTimeout(function(){
    error.classList.remove('error')
    error.classList.add('hide')
  },5000)
}
function validar(u,p){
   if (u === ''  || p === ''){
      console.log('No ingresaste usuario o password. Ingresa un dato')
      console.log('Bienvenido a tu cuenta')
      errores('Datos')
   } 
   else {
      if( u === dbUser && p === dbPassword){
         console.log('Bienvenido a la cuenta')
         crear(dbUser)
       
      //else {
        // console.log('Usuario o password incorrecto')
     // }
      } 
      else if (u != dbUser){
         errores('Usuario')
         
      } 
      else if (p != dbPassword){
         errores('Password')
      }
   }
}

 
formulario.addEventListener('submit', function(evento){
   evento.preventDefault()
   let usuario = document.getElementById('usuario').value
   let password = document.getElementById('password').value
   validar(usuario,password)
   
})
