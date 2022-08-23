const formulario = document.getElementById('formulario')

const dbUser = 'Migue'
const dbPassword = '1234abc'

function validar(u,p){
   if (u === ''  || p === ''){
      console.log('No ingresaste usuario o password. Ingresa un dato')
   } 
   else {
      if( u === dbUser && p === dbPassword){
         console.log('Bienvenido a tu cuenta')
       
      //else {
        // console.log('Usuario o password incorrecto')
     // }
      } 
      else if (u != dbUser){
         let errorUser = document.getElementById('errorUsuario')
         errorUser.classList.remove('hide')
         errorUser.classList.add('error')
         
      } 
      else if (p != dbPassword){
         let errorPassword = document.getElementById('errorPassword')
         errorPassword.classList.remove('hide')
         errorPassword.classList.add('error')
      }
   }
}

 
formulario.addEventListener('submit', function(evento){
   evento.preventDefault()
   let usuario = document.getElementById('usuario').value
   let password = document.getElementById('password').value
   validar(usuario,password)
})
