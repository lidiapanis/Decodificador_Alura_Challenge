const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.background="none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"],["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = descriptografar(mensagem.value)
    mensagem.value = textoDesencriptado
    mensagem.style.backgroundImage
}

function descriptografar (StringDescriptografada){
    let matrizCodigo = [["enter","e"], ["imes","i"], ["ai","a"],["ober","o"], ["ufat","u"]];
    StringDescriptografada = StringDescriptografada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(StringDescriptografada.includes(matrizCodigo[i][0])){
            StringDescriptografada = StringDescriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return StringDescriptografada;
}
function btnCopiar(){
    let copiaTexto = document.querySelector(".mensagem");
    copiaTexto.select();
    copiaTexto.setSelectionRange(0,99999);
    document.execCommand('copy');
    alert("Texto Copiado!");

}

document.querySelector(".input-texto").addEventListener("click",copia);