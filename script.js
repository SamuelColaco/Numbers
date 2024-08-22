
//Inicio

//Inicializando as variaveis globais
const inputs = document.querySelectorAll("input")
const form = document.querySelector("form")
const span = document.querySelector("#toggle") 
let result = 0
let many = []

// Validando o input para só escrever numeros
inputs.forEach((input) => input.oninput = () => {
    input.value = input.value.replace(/\D/g, "")
})

//Inicializando o evento de enviar o formulário, no clique do botão
form.onsubmit = (event) => {
    event.preventDefault()
    
    const data = {
        id: new Date().getTime(),
        number: inputs[0].value,
        start: inputs[1].value,
        end: inputs[2].value,
    }
    sortNumbers(data)
    
    
}

//Função para sortear os numeros
function sortNumbers(data){
    
    //Validando o código com try catch para capturar os erros.
    try {

        //Inicializando as variaveis locais
        const fieldset = form.querySelectorAll("div fieldset")
        const div = form.querySelector("div")
        const h2 = document.querySelector("#roullette div h2")
        let p2 = document.querySelector("#roullette div p")
        const button = document.querySelector("button")
        const img = button.querySelector("img")
        const div2 = document.querySelector("#roullette div")

        let count = 0
        //Verificando se os inputs foram preenchidos
        if(data.number == "" || data.start == "" || data.end == ""){
            alert("Por favor preencha os campos")
        }
        else{

            h2.textContent = "Resultado do sorteio"
            fieldset.forEach((field) => field.style.display = "none")
            
            //Iniciando o loop de geração de numeros
             while(count < data.number){
                 let p = document.createElement("p")
                 p.textContent = Math.floor(Math.random() * (Math.floor(data.end)  - Math.ceil(data.start) + 1) + Math.ceil(data.start) )
                 
                 
                 //Verificando condições de repetição de numeros
                 if(span.classList.contains("on")){
                     if(!many.includes(Number(p.textContent))){
                         result+=1
                         count += 1
                         many.push(Number(p.textContent))
                         p.classList.add("number")
                         div.style.justifyContent = "center"
                         div.appendChild(p)
                         console.log(many)
                    }
                 }
                 else{
                            result+=1
                            count += 1
                            many.push(Number(p.textContent))
                            p.classList.add("number")
                            div.style.justifyContent = "center"
                            div.appendChild(p)
                            
                 }
        }
            //Mudando aspecto da página após o clique e o sorteio
            button.textContent = "Sortear novamente"
            button.appendChild(img)
            img.src = "imgs/assets/restart.svg"
            p2.textContent = `${result} RESULTADO`
            div2.style.textAlign = "center"
        }

        
    }
     catch (error) {
        console.log(error)
    }
}

//Fazendo o evento de clique no botão de repetição dos numeros
span.addEventListener("click", () => {
    if(result === 0){
        span.classList.toggle("off")
        span.classList.toggle("on")

    }
    else{
        alert("Não se pode fazer isso agora")
    }
})
//Fim