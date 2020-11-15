function gerar() {
    var num = document.querySelector('#num').value
    var inputNum = document.querySelector('#num')

    if (inputNum.disabled) {
        document.location.reload()
    } else {
        if (num == "") {
            alert("Você deve inserir um número")
        } else {
            for (var m = 0; m <= 10; m++) {
                corpoTbl = document.querySelector('#corpoTbl')
                
                trRecebeTd = document.createElement('tr')
                trRecebeTd.setAttribute('class', 'teste')
                tdNumTab = document.createElement('td')
                corpoTbl.appendChild(trRecebeTd)
                trRecebeTd.appendChild(tdNumTab)
                tdNumTab.innerHTML += num + "<br>"
                
                tdSinalOp = document.createElement('td')
                trRecebeTd.appendChild(tdSinalOp)
                tdSinalOp.innerHTML += 'x'
                
                tdMult = document.createElement('td')
                trRecebeTd.appendChild(tdMult)
                tdMult.innerHTML += m
    
                tdSinalIgual = document.createElement('td')
                trRecebeTd.appendChild(tdSinalIgual)
                tdSinalIgual.innerHTML += '='
    
                tdResultado = document.createElement('td')
                trRecebeTd.appendChild(tdResultado)
                tdResultado.innerHTML += m * num 
            }
            btnMostrar = document.querySelector("#btnMostrar")
            btnMostrar.innerHTML = "Resetar para digitar outra tabuada"
            inputNum.disabled = true
        }
    }
    
}