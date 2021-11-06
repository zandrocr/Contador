function clic(){
    let v1 = document.querySelector('#valor1')
    let v2 = document.querySelector('#valor2')
    let pulo = document.querySelector('#pular')
    let resp = document.querySelector('#resp')

    //passando para valores
    v1 = Number(v1.value)
    v2 = Number(v2.value)
    pulo = Number(pulo.value)

    console.log(v1, v2, pulo)

    //condição para inicio
    if (v1 == 0 || v2 == 0 || pulo <= 0){
        alert('Valores invalidos, digite os valores validos nos parametros')
    }else{
        if (v1 < v2){
            for(let c = v1; c <= v2; c += pulo){
                resp.innerHTML += `${c}.  `
            }
        }else{
            for(let b = v1; b >= v2; b -= pulo){
                resp.innerHTML += `${b}. `
            }
        }
    }
}