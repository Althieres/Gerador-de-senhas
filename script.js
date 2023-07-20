let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizeSenha = document.querySelector("#quantidade")
let senha = document.querySelector("#senha")

let containerSenha = document.querySelector("#container-senha")

let charset = "abcdefghijlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()_-+=,<>"
let novaSenha = ""
// caixa de variaveis

sizeSenha.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizeSenha.innerHTML = this.value;
}
//função de mudança da quantidade da ranger

function geradorSenha(){
    
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerSenha.classList.remove("hide");
    senha.innerHTML = pass;
    novaSenha = pass;
}


function copiarSenha(){
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
}


