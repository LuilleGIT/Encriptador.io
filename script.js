const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"//

function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}

function encriptar(stringEncriptada){
        let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

        for( let i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll
                (matrizCodigo[i][0],matrizCodigo[i][1])
            }
        }
         return stringEncriptada;
    }

    function btndesencriptar(){
        const textoEncriptado = desencriptar(inputTexto.value)
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none"
        inputTexto,value = ""
    }
    
    function desencriptar(stringdesencriptada){
            let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
            stringdesencriptada = stringdesencriptada.toLowerCase();
    
            for( let i = 0; i < matrizCodigo.length; i++){
                if(stringdesencriptada.includes(matrizCodigo[i][1])){
                    stringdesencriptada = stringdesencriptada.replaceAll
                    (matrizCodigo[i][1],matrizCodigo[i][0])
                }
            }
             return stringdesencriptada;
        }

        function copiar(){
            mensaje.select()
            navigator.clipboard.writeText(mensaje.value)
            mensaje.value = ""
            alert = ("Texto copiado")
        }
