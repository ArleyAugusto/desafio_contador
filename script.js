function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var result = document.getElementById('resultado')

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0)  {
       result.innerHTML = 'Impossível contar!!'
        
    } else {
        result.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value) 
        if (p <= 0) {
            window.alert ('Passo inválido!!')
        }

        if (i < f) {
            //Contagem crescente
            for (var c = i; c <= f; c += p) { 
                result.innerHTML += ` ${c} \u{1F4A5}`
           }
   
  
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                result.innerHTML += ` ${c} \u{1F4A5} `
            }
        }
        result.innerHTML += `\u{1F3C1}`
        
    }
}