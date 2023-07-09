const inputSlide = document.querySelector('#slide');
const valueSlide = document.querySelector('#valor');
const botao = document.querySelector('#botaoSenha');
let password = document.querySelector('#password');
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&';
let newSenha = '';

password.addEventListener("click", (_) => {
    copiarSenha()
})

botao.addEventListener("click", (_) => {
    genPassword()
})

slide.oninput = function(){
    valueSlide.innerHTML = this.value
}

function genPassword() {
    let pass = ""
    for(let i = 0, n = charset.length ; i < inputSlide.value; i++){
        pass+= charset.charAt(Math.floor(Math.random() * n))
    }

    password.innerHTML = pass;
    password.classList.remove('off')
    newSenha = pass
}

function copiarSenha() {
    navigator.clipboard.writeText(newSenha)
}