let campo = document.getElementById('container03')
let calcular = document.getElementById('calcular')
let resultado = document.getElementById('resultado')

calcular.addEventListener("dblclick", ()=> {
    resultado.innerHTML = ""
})

calcular.addEventListener("click", ()=> {
    resultado.innerHTML = ""
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    for(i=1; i<=n2; i++) {
        resultado.innerHTML += `${n1} X ${i} = ${n1*i}<br>`
    }
    
})