function tabuada(){
   var number = window.document.getElementById('txtn')
   var  tab = window.document.getElementById('seltab')

   if (number.value.length == 0) {
    window.alert('[ERRO], informe um número')
   } else {
    let num = Number(number.value)
    tab.innerHTML='' // limpando o select

    for(let i = 0 ; i <= 10 ; i++){
        let item = document.createElement('option')
        item.text = `${num} X ${i} =  ${i*num} `
        tab.appendChild(item) //adicionando o elemento filho dendro do select

    }

   }
}