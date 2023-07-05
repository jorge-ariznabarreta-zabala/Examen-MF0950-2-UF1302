let username=document.getElementById('username');
let pass=document.getElementById('pass');
let login=document.getElementById('loginboton')
login.addEventListener("click", log_in)


 function log_in() {
     if (username.value.includes("@")){ //comprueba que el email es válido
         checkPassword(pass.value);         
     }
     else{
         alert(username.value+" NO es valido! => Falta '@'"); 
     };
 };


function checkPassword(valor){
    
    const myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
    /*valida contraseñas de al menos 
    una letra, un numero, una letra mayúscula, 8 caracteres
     no permite espacios.*/
   if(myregex.test(valor)){
       alert(valor+" es valido :-) !");
       alert(username.value+" Ha ingresado correctamente");       
   }else{
      alert("Password "+valor+" NO es valido!");
            
   }   
 }