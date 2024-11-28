
const inicial = document.querySelector('.inicial')
const final = document.querySelector('.final')

const btn = document.querySelector('#btn')
const resul = document.querySelector('.resultado')



btn.addEventListener('click', (e) =>{
    CalcDate()
    
    
})


const CalcDate = ()=>{
    const dateIn = new Date(inicial.value)
    const dateFi = new Date(final.value)

    let ms = dateFi - dateIn
    let hora = ms / 3600000
    let dia = hora / 24

    resul.innerHTML = `<b style="color:black; margin-left:10px"> ${dia} Dias</b>`

    if(dia < 180){
        resul.innerHTML += ''
        resul.innerHTML += '<b style="color:green;">Receita Dentro do Prazo de Validade</b>'
        
    }else{
        resul.innerHTML += ''
        resul.innerHTML += '<b style="color:red;">Receituario Vencido</b>'
    }

}