// if-если  
// else - иначе
// let sum  = 0

// if(sum==1){
// console.log("Hello World!")
// }else {
// alert('fghn')
// }

// let password = prompt('Ваш пароль?')

// if(password == 1234){
//     alert('Вы ввели пароль верно:)')

// }
// else{
//     alert('Пароль не верный:(')
// }

// let userName = prompt('Введите никнейм')
let userName = prompt('Придумайте ник')
let createPassword = prompt('Придумайте пароль')
toString(createPassword)
let password1 = "999"
let password2 = "888"
let checkName = prompt("Что бы войти введите ник потом пароль")
let checkPassword = prompt("Введите ваш пароль")

switch(checkPassword){
    case password1:
         document.body.style.backgroundColor="green"  
         break;      
    case password2:
        document.body.style.backgroundColor="green"        
        break;
    case createPassword:
        document.body.style.backgroundColor="green"        

    default :
    document.body.style.backgroundColor="red"        
    
}

