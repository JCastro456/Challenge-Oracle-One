var textInput = document.querySelector("#input-texto");


function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/a/g, "ai")
                            .replace(/e/g, "enter")                            
                            .replace(/i/g, "imes")                            
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">' + resultCripto + 
    '</textarea>' + '<button class="btn-copy" id="copy" onclick="copiar()">Copiar</button>'
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/ai/g, "a")
                               . replace(/enter/g, "e")
                               .replace(/imes/g,"i")    
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u")

    document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copy" id="copy" onclick="copiar()">Copiar</button>'
}

function copiar(){
    var textoCop = document.getElementById('output-texto').value; 

    if (navigator.clipboard.writeText(textoCop)) {
        alert("Texto copiado!");  
        document.getElementById("copy").textContent = "Copiado";
    }; 

    setInterval(function() {
        document.getElementById("copy").textContent = "Copiar";
    }, 3000
    )
    
}

function limpar() {
   document.getElementById('input-texto').value = "";
   document.getElementById('output-texto').value = "";
}

